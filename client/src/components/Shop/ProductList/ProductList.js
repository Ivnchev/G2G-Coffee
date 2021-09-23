import './ProductList.css'
import ShopCard from '../ShopCard/ShopCard'


const ProductList = ({
    title
}) => {


    return (
        <div className="shop-products-wrapper">
            <h2 className="shop-products-title">{title}</h2>
            <article className="shop-products">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </article>
        </div>
    )
}


export default ProductList