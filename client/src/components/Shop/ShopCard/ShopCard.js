import './ShopCard.css'
import { Link } from 'react-router-dom'



const ShopCard = ({
    data
}) => {

    return (
        <div className="shop-card-wrapper">
            <div className="shop-card-image-wrapper">
                <img src={data.imageURL} alt="" className="shop-card-image" />
            </div>
            <div className="shop-card-container">
                <p className="shop-card-title">{data.title}</p>
                <p className="shop-card-description">{data.description.slice(0, 30)+ '...'}</p>
            </div>
            <div className="shop-card-more-info">
                <div>
                    <p className="shop-card-info-title">{data.title}</p>
                    <p className="shop-card-info-description">{data.description}</p>
                    <Link to={`/product/${data._id}/details`}>
                        <button className="shop-card-info-btn">Order now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default ShopCard