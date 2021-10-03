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

    const context = useContext(GlobalContext)[0]
    const [product, setProduct] = useState({})
    const [fav, setFav] = useState(false)

    useEffect(() => {
        if (context.auth) {
            Promise.all([
                productService.getOneProduct(match.params.id),
                userService.user(context.auth._id)
            ]).then(([product, user]) => {
                setProduct(s => (product))
                if (user.favorites.includes(product._id)) {
                    setFav(s => (true))
                }
            }).catch(console.log)
        }
    }, [match.params.id, context, product._id])

    function favHandler() {
        favService.postFav(product._id, product)
            .then(x => {
                history.push('/')
            })
    }

    function removeFavHandler() {
        favService.deleteFav(product._id)
            .then(x => {
                history.push('/')
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
                            </div>
                            <div className="product-details-buttons">
                                <Link to={`/product/${product._id}/order`}>
                                    <div className="product-details-order-btn-wrapper">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Order</span>
                                    </div>
                                </Link>
                                {
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