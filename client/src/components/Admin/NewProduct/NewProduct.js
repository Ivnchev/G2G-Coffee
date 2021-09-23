import './NewProduct.css'



const NewProduct = (props) => {


    function submitHandler(e) {
        e.preventDefault()

        console.log(e);
    }

    return (
        <div className="new-product-wrapper">
            <form className="new-product-form" onSubmit={submitHandler}>
                <h1 className="new-product-title">New Product</h1>
                <div className="new-product-errors">
                    <p className="new-product-error"></p>
                </div>
                <div className="new-product-container">
                    <h3>Product Category</h3>
                    <div className="new-product-select-wrapper">
                        <select id="product-category">
                            <option value="barista">From Barista</option>
                            <option value="packages">Packages</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                </div>
                <div className="new-product-input">
                    <label htmlFor="product-name"> Product Name</label>
                    <input type="text" name="product-name" id="product-name" />
                </div>
                <div className="new-product-input">
                    <label htmlFor="product-image"> Product Image</label>
                    <input type="url" name="product-image" id="product-image" placeholder="https://example.com" />
                </div>
                <div className="new-product-input">
                    <label htmlFor="product-description"> Product Description</label>
                    <textarea type="url" name="product-description" id="product-description" cols="50" rows="10" ></textarea>
                </div>
                <div className="new-product-container">
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </div>
    )
}


export default NewProduct