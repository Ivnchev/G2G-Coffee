import './OfferCard.css'
import { Link } from 'react-router-dom'


const OfferCard = ({
    data
}) => {


    return (
        <div className="offer-card">
            <div className="offer-card-image-wrapper">
                <img className="offer-card-image" src={data.imageURL} alt="" />
            </div>
            <Link to={`/product/${data._id}/details`}>
                <div className="offer-card-more-info">
                    <div className="offer-card-container">
                        <p className="offer-card-title">{data.title}</p>
                        <p className="offer-card-description">
                            {data.description.slice(0, 50) + '...'}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default OfferCard