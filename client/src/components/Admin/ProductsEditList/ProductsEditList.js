import "./ProductsEditList.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import productService from "../../../services/Products/ProductService"


const ProductsEditList = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        productService.getProducts()
            .then(list => setList(state => (list)))
            .catch(err => { console.log(err); })
    }, [])

    function removeHandler(e) {
        const element = e.currentTarget.parentNode
        productService.deleteProduct(e.currentTarget.id)
            .then(() => { element.remove() })
            .catch(err => { console.log(err); })
    }

    return (
        <div className="edit-list-wrapper">
            <table className="edit-list-table">
                <caption>Product List</caption>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map(x => (
                            <tr key={x._id}>
                                <td data-label={x.category}>{x.category}</td>
                                <td data-label={x.title}>{x.title}</td>
                                <td data-label="Edit"><Link to={`/product/${x._id}/edit`}><i className="fas fa-edit"></i></Link></td>
                                <td data-label="Remove" onClick={removeHandler} id={x._id}><i className="fas fa-trash"></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ProductsEditList