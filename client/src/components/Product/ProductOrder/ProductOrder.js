import './ProductOrder.css'
import { useState, useEffect, useContext } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import productService from '../../../services/Products/ProductService'
import GlobalContext from "../../../contexts/global/GlobalContext";
import orderService from '../../../services/Order/OrderService';

const ProductOrder = ({
    match,
    history
}) => {

    const [product, setProduct] = useState({})
    const [payment, setPayment] = useState(true)
    const context = useContext(GlobalContext)[0]

    const initialValues = {
        estimateTime: 'NA',
        quantity: ''
    }

    useEffect(() => {
        let isSubscribed = true
        productService.getOneProduct(match.params.id)
            .then(data => isSubscribed ? setProduct(s => (data)) : null)
            .catch(err => isSubscribed ? console.log(err) : null)

        return () => isSubscribed = false
    }, [match.params.id])


    function togglePayment() {
        setPayment(s => !payment)
    }

    function submitHandler(values, actions) {
        const estimateTime = (product.category === 'accessory' || product.category === 'package')
            ? 'NA'
            : values.estimateTime
        const data = {
            product,
            estimateTime,
            quantity: values.quantity,
            bill: (values.quantity * Number(product.price)),
            paid: payment,
            user: context.auth
        }
        orderService.postOrder(data)
            .then(() => {
                history.push(`/user/${context.auth._id}/profile`)
            })
    }

    return (
        <div className="order-form-layout">
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    quantity: Yup.number()
                        .min(1, 'To Short!')
                        .max(10, 'To Long!')
                        .required('Required')
                })}
                onSubmit={submitHandler}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="order-form">
                        <h1 className="order-form-title">{product.title}</h1>
                        <h3 className="order-form-price">Price: {product.price} $</h3>
                        <div className="order-form-errors">
                            <p className="order-form-error"></p>
                        </div>
                        <div className="order-form-image">
                            <img src={product.imageURL} alt="product" />
                        </div>
                        {
                            product.category !== 'coffee'
                                ? ''
                                : (<div className="order-form-container">
                                    <h3>Estimate Time</h3>
                                    <div className="order-form-select-wrapper">
                                        <Field as="select" name="estimateTime">
                                            <option value="10">10 minutes</option>
                                            <option value="20">20 minutes</option>
                                            <option value="30">30 minutes</option>
                                        </Field>
                                    </div>
                                </div>)
                        }
                        <div className="order-form-container">
                            <label htmlFor="quantity" className="quantity-label">Quantity</label>
                            <Field type="number" className="quantity" id="quantity" name="quantity" />

                            {errors.quantity && touched.quantity ? (
                                <div className="form-error-message">{errors.quantity}</div>
                            ) : null}
                        </div>
                        <div className="order-form-container">
                            <label htmlFor="payment" className="payment-label">
                                <Field type="checkbox" className="payment" id="payment" name="paid" checked={payment} onChange={togglePayment} />
                                <span>Pay via card</span>
                            </label>
                        </div>
                        <div className="order-form-container">
                            <input type="submit" value="Buy" className="submit" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default ProductOrder