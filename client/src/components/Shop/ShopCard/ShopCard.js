import './ShopCard.css'
import { Link } from 'react-router-dom'



const ShopCard = (props) => {


    return (
        <div className="shop-card-wrapper">
            <div className="shop-card-image-wrapper">
                <img src="/images/shop/coffee1.png" alt="" className="shop-card-image" />
            </div>
            <div className="shop-card-container">
                <p className="shop-card-title">G2G coffee 100% Arabica - <span>1 kg.</span></p>
                <p className="shop-card-description">Unique aroma with strong intensity.</p>
            </div>
            <div className="shop-card-more-info">
                <div>
                    <p className="shop-card-info-title">G2G coffee 100% Arabica - <span>1 kg.</span></p>
                    <p className="shop-card-info-description">Though inherent in the bean, Aroma intensifies as the Roast reaches medium dark,
                    then tapers off to become a singular Roast note. There are two distinct points to note your coffee's aroma:
                When the beans are just ground (known as Dry aroma) and when just completing the brew (called Wet aroma or at Break).</p>
                    <Link to="/product/asd/details">
                        <button className="shop-card-info-btn">Order now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default ShopCard