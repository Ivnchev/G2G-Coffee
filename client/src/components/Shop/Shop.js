import './Shop.css'
import ShopHeading from './ShopHeading/ShopHeading'
import ProductList from './ProductList/ProductList'
import { useEffect, useState, useContext } from 'react'
import productService from '../../services/Products/ProductService'
import GlobalContext from '../../contexts/global/GlobalContext'


const Shop = (props) => {

    const dispatch = useContext(GlobalContext)[1]

    const [filters, setFilters] = useState({
        sort: 'ascending',
        search: '',
    })
    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getProducts()
            .then(data => {
                setProducts(s => (data))
            })
            .catch(error => {
                dispatch({ type: 'error', payload: error })

            })
    }, [dispatch])

    function onChangeHandler(e) {
        setFilters(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    function sortSubmitHandler(e) {
        e.preventDefault()
        productService.getProducts(filters.sort)
            .then(data => {
                setProducts(s => (data))
            })
            .catch(error => {
                dispatch({ type: 'error', payload: error })

            })
    }

    function searchSubmitHandler(e) {
        e.preventDefault()
        productService.getProducts(filters.search)
            .then(data => {
                setProducts(s => (data))
            })
            .catch(error => {
                dispatch({ type: 'error', payload: error })

            })
    }


    return (
        <div className="shop-wrapper">
            <ShopHeading />
            <section className="shop-products-container">
                <div className="shop-filter-wrapper">
                    <div className="shop-sort-container">
                        <form onSubmit={sortSubmitHandler}>
                            <select name="sort"
                                id="sort"
                                className="shop-sort-select"
                                onChange={onChangeHandler}
                            >
                                <option value="ascending" className="shop-sort-option">Ascending</option>
                                <option value="descending" className="shop-sort-option">Descending</option>
                            </select>
                            <button type="submit" className="shop-sort-btn">Sort</button>
                        </form>
                    </div>
                    <div className="shop-filter-container">
                        <form className="shop-filter-search"
                            onSubmit={searchSubmitHandler}
                        >
                            <input type="text"
                                name="search"
                                placeholder="Search..."
                                onChange={onChangeHandler}
                            />
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