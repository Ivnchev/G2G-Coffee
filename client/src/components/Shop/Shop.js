import './Shop.css'
import ShopHeading from './ShopHeading/ShopHeading'
import ProductList from './ProductList/ProductList'


const Shop = (props) => {


    return ( 
        <div className="shop-wrapper">
            <ShopHeading />
            <section className="shop-products-container">
                <div className="shop-filter-wrapper">
                    <div className="shop-sort-container">
                        <select name="sort" id="sort" className="shop-sort-select">
                            <option value="ascending" className="shop-sort-option">Ascending</option>
                            <option value="descending" className="shop-sort-option">Descending</option>
                        </select>
                        <button className="shop-sort-btn">sort</button>
                    </div>
                    <div className="shop-filter-container">
                        <form className="shop-filter-search">
                            <input type="text" name="search" placeholder="Search..." />
                            <button className="shop-sort-btn">Search</button>
                        </form>
                    </div>
                </div>
                <div>
                    <ProductList title="Coffee 'ready 2 go' / from barista /" />
                    <ProductList title="Packages" />
                    <ProductList title="Accesories" />
                </div>

            </section>
        </div>
    )
}


export default Shop