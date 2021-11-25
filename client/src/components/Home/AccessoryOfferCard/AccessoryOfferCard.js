import './AccessoryOfferCard.css'
import { Link } from 'react-router-dom'


const AccessoryOfferCard = ({
    data
}) => {


    return (
        <div className="accessory-wrapper">
            <div className="accessory-offer-image-wrapper">
                <img className="accessory-offer-image" src={data?.imageURL} alt="" />
            </div>
            <div className="accessory-more-info">
                <div>
                    <Link to={`/product/${data?._id}/details`}>
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default AccessoryOfferCard