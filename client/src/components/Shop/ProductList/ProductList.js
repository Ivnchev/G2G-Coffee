import './ProductList.css'
import ShopCard from '../ShopCard/ShopCard'


const ProductList = ({
    title,
    data
}) => {

    return (
        <div className="shop-products-wrapper">
            {
                data.length === 0
                    ? ''
                    : <h2 className="shop-products-title">{title}</h2>
            }

            <article className="shop-products">
                {
                    data.map(x => (
                        <ShopCard key={x._id} data={x} />
                    ))
                }
            </article>
        </div>
    )
}


export default ProductList