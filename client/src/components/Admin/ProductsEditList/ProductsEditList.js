import "./ProductsEditList.css"
import { Link } from "react-router-dom"


const ProductsEditList = (props) => {

    const dummyData = [
        {
            category: 'Coffee',
            productName: 'Espresso',
            _id: 1
        },
        {
            category: 'Package',
            productName: 'Espresso 1 kg',
            _id: 2
        },
        {
            category: 'Accessories',
            productName: 'Cup',
            _id: 3
        },
    ]

    function removeHandler(e) {
        e.currentTarget.parentNode.remove()
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
                        dummyData.map(x => (
                            <tr key={x._id}>
                                <td data-label={x.category}>{x.category}</td>
                                <td data-label={x.productName}>{x.productName}</td>
                                <td data-label="Edit"><Link to={`/product/${x._id}/edit`}><i className="fas fa-edit"></i></Link></td>
                                <td data-label="Remove" onClick={removeHandler} ><i className="fas fa-trash"></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ProductsEditList