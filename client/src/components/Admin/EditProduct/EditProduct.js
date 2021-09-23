import './EditProduct.css'

const EditProduct = (props) => {


    function submitHandler(e) {
        e.preventDefault()

        console.log(e);
    }

    return (
        <div className="edit-product-wrapper">
            <form className="edit-product-form" onSubmit={submitHandler}>
                <h1 className="edit-product-title">Edit Product</h1>
                <div className="edit-product-errors">
                    <p className="edit-product-error"></p>
                </div>
                <div className="edit-product-container">
                    <img src="https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_960_720.png" alt=""/>
                </div>
                <div className="edit-product-container">
                    <h3>Product Category</h3>
                    <div className="edit-product-select-wrapper">
                        <select id="product-category">
                            <option value="barista">From Barista</option>
                            <option value="packages">Packages</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                </div>
                <div className="edit-product-input">
                    <label htmlFor="product-name"> Product Name</label>
                    <input type="text" name="product-name" id="product-name" />
                </div>
                <div className="edit-product-input">
                    <label htmlFor="product-image"> Product Image</label>
                    <input type="url" name="product-image" id="product-image" placeholder="https://example.com" />
                </div>
                <div className="edit-product-input">
                    <label htmlFor="product-description"> Product Description</label>
                    <textarea type="url" name="product-description" id="product-description" cols="50" rows="10" ></textarea>
                </div>
                <div className="edit-product-container">
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </div>
    )
}


export default EditProduct