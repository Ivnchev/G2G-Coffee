import './TopProductCard.css'



const TopProductCard = (props) => {


    return (
        <div className="product-card">
            <img className="product-card-image" src="/images/home/coffee-2559748_640.jpg" alt="" />
            <div className="product-description-container">
                <p className="product-card-title">
                    Lorem ipsum dolor
                        </p>
                <p className="product-card-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
            </div>
            <div className="product-card-more-info">
                <button>View more</button>
            </div>
        </div>
    )
}


export default TopProductCard