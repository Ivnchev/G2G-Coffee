import './ProductDetails.css'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {


    function favHandler(e) {
        
    }

    return (
        <div className="product-details-layout">
            <section className="product-details-wrapper">
                <article className="product-details-container">
                    <h1>Espresso</h1>
                    <div className="product-details-content-wrapper">
                        <div className="product-image-details">
                            <img src="/images/shop/coffee2.png" alt="" />
                        </div>
                        <div className="product-details-inner-wrapper">
                            <div className="product-details-description">
                                <p>Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit.
                                Reiciendis doloremque ullam facilis iusto
                                sit quisquam aperiam quas beatae eveniet nihil ab,
                                repudiandae excepturi labore, assumenda voluptate earum.
                            Incidunt, exercitationem fuga!</p>
                            </div>
                            <div className="product-details-buttons">
                                <Link to="/product/asd/order">
                                    <div className="product-details-order-btn-wrapper">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Order</span>
                                    </div>
                                </Link>
                                <div className="product-details-fav-btn-wrapper" onClick={favHandler}>
                                    <i className="fas fa-heart"></i>
                                    <span>Add Favorites</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}


export default ProductDetails   