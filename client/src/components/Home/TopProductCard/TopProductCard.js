import './TopProductCard.css'
import { Link } from 'react-router-dom'



const TopProductCard = ({
    data
}) => {

    return (
        <div className="product-card">
            <img className="product-card-image" src={data.imageURL} alt="" />
            <div className="product-description-container">
                <p className="product-card-title">
                    {data.title}
                </p>
                <p className="product-card-description">
                    {data.description.slice(0, 100) + '...'}
                </p>
            </div>
            <div className="product-card-more-info">
                <Link to={`/product/${data._id}/details`}>
                    <button>View more</button>
                </Link>
            </div>
        </div>
    )
}


export default TopProductCard