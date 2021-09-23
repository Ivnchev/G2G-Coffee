import './OfferCard.css'
import { Link } from 'react-router-dom'


const OfferCard = (props) => {


    return (
        <div className="offer-card">
            <div className="offer-card-image-wrapper">
                <img className="offer-card-image" src="/images/home/coffee-2559748_640.jpg" alt="" />
            </div>
            <div className="offer-card-more-info">
                <Link to="/">
                    <div className="offer-card-container">
                        <p className="offer-card-title">Lorem ipsum dolor</p>
                        <p className="offer-card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default OfferCard