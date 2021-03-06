import './ProductDetails.css'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import productService from '../../../services/Products/ProductService'
import favService from '../../../services/Favorites/FavoriteService'
import GlobalContext from '../../../contexts/global/GlobalContext'
import userService from '../../../services/User/UserService'

const ProductDetails = ({
    match,
    history
}) => {

    const [context, dispatch] = useContext(GlobalContext)
    const [product, setProduct] = useState({})
    const [fav, setFav] = useState(false)

    useEffect(() => {
        let isSubscribed = true
        if (context.auth?._id) {
            Promise.all([
                productService.getOneProduct(match.params.id),
                userService.user(context.auth._id)
            ]).then(([product, user]) => {
                if (isSubscribed) {
                    setProduct(s => (product))
                    const isFav = user.favorites.find(x => x._id.toString() === product._id)
                    if (isFav) {
                        setFav(s => (true))
                    }
                }
            }).catch(error => {
                if (isSubscribed) {
                    dispatch({ type: 'error', payload: error })
                }
            })
        } else {
            productService.getOneProduct(match.params.id)
                .then((product) => {
                    if (isSubscribed) {
                        setProduct(s => (product))
                    }
                }).catch(error => {
                    if (isSubscribed) {
                        dispatch({ type: 'error', payload: error })
                    }
                })
        }

        return () => (isSubscribed = false)
    }, [match.params.id, context, product._id, dispatch, product])

    function favHandler() {
        favService.postFav(product._id, product)
            .then(x => {
                history.push(`/user/${context.auth._id}/profile`)
            })
    }

    function removeFavHandler() {
        favService.deleteFav(product._id)
            .then(x => {
                history.push('/shop')
            })
    }

    return (
        <div className="product-details-layout">
            <section className="product-details-wrapper">
                <article className="product-details-container">
                    <h1>{product.title}</h1>
                    <div className="product-details-content-wrapper">
                        <div className="product-image-details">
                            <img src={product.imageURL} alt="product" />
                        </div>
                        <div className="product-details-inner-wrapper">
                            <div className="product-details-description">
                                <p>{product.description}</p>
                                <p>Price: <span>{product.price} $</span></p>
                            </div>

                            <div className="product-details-buttons">

                                <Link to={`/product/${product._id}/order`}>
                                    <div className="product-details-order-btn-wrapper">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Order</span>
                                    </div>
                                </Link>
                                {
                                    context.auth?._id ?
                                        (
                                            fav ? (
                                                <div className="product-details-fav-btn-wrapper" onClick={removeFavHandler}>
                                                    <i className="fas fa-heart-broken"></i>
                                                    <span>Remove </span>
                                                </div>
                                            )
                                                : (
                                                    <div className="product-details-fav-btn-wrapper" onClick={favHandler}>
                                                        <i className="fas fa-heart"></i>
                                                        <span>Add Favorites</span>
                                                    </div>
                                                )
                                        ) : ''
                                }
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}


export default ProductDetails   