import './ProductOrder.css'
import { useState, useEffect } from 'react'
import productService from '../../../services/Products/ProductService'


const ProductOrder = ({
    match
}) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        let isSubscribed = true
        productService.getOneProduct(match.params.id)
            .then(data => isSubscribed ? setProduct(s => (data)) : null)
            .catch(err => isSubscribed ? console.log(err) : null)

        return () => isSubscribed = false

    }, [match.params.id])

    return (
        <div className="order-form-layout">
            <form className="order-form">
                <h1 className="order-form-title">{product.title}</h1>
                <div className="order-form-errors">
                    <p className="order-form-error"></p>
                </div>
                <div className="order-form-image">
                    <img src={product.imageURL} alt="product" />
                </div>
                <div className="order-form-container">
                    <h3>Estimate Time</h3>
                    <div className="order-form-select-wrapper">
                        <select>
                            <option value="10">10 minutes</option>
                            <option value="20">20 minutes</option>
                            <option value="30">30 minutes</option>
                        </select>
                    </div>
                </div>
                <div className="order-form-container">
                    <label htmlFor="payment">
                        <input type="checkbox" className="payment" id="payment" defaultChecked="checked" />
                        <span>Pay via card</span>
                    </label>
                </div>
                <div className="order-form-container">
                    <input type="submit" value="Buy" className="submit" />
                </div>

            </form>
        </div>
    )
}


export default ProductOrder