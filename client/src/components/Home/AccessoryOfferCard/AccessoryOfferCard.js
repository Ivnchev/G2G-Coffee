import './AccessoryOfferCard.css'


const AccessoryOfferCard = (props) => {


    return (
        <div className="accessory-wrapper">
            <div className="accessory-offer-image-wrapper">
                <img className="accessory-offer-image" src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            </div>
            <div className="accessory-more-info">
                <div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}


export default AccessoryOfferCard