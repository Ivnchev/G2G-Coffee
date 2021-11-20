import './Shop.css'
import ShopHeading from './ShopHeading/ShopHeading'
import ProductList from './ProductList/ProductList'
import { useEffect, useState, useContext } from 'react'
import productService from '../../services/Products/ProductService'
import GlobalContext from '../../contexts/global/GlobalContext'


const Shop = (props) => {

    const dispatch = useContext(GlobalContext)[1]

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getProducts()
            .then(data => {
                setProducts(state => (data))
            })
            .catch(error => {
                dispatch({ type: 'error', payload: error })

            })
    }, [dispatch])

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
                    {
                        ['coffee', 'package', 'accessory'].map(x => {
                            const data = products.filter(p => p.category === x)
                            return (
                                <ProductList key={x} title={x} data={data} />
                            )
                        })
                    }
                </div>

            </section>
        </div>
    )
}


export default Shop