import './Home.css'
import Intro from './Intro/Intro'
import TopProductCard from './TopProductCard/TopProductCard'
import OfferCard from './OfferCard/OfferCard'
import AccessoryOfferCard from './AccessoryOfferCard/AccessoryOfferCard';



const Home = (props) => {


    return (
        <div className="home-container">
            <Intro />
            <section className="home-top-products">
                <div className="home-top-products-wrapper">
                    <p className="home-top-products-title">Top coffee products</p>
                    <article className="products-container">
                        <TopProductCard />
                        <TopProductCard />
                        <TopProductCard />
                    </article>
                </div>
            </section>
            <div className="offer-container">
                <section className="daily-offer">
                    <div className="daily-offer-wrapper">
                        <article className="daily-offer-container">
                            <p className="home-top-products-title">Daily offers</p>
                            <div className="daily-hot-offers">
                                <OfferCard />
                                <OfferCard />
                                <OfferCard />
                            </div>
                        </article>
                    </div>
                </section>
                <section className="accessory-offers">
                    <div className="accessory-offers-wrapper">
                        <article className="accessory-offers-container">
                            <p className="home-top-products-title">Accessory offers</p>
                            <div className="top-accessories">
                                <div className="first-accessory-wrapper">
                                    <AccessoryOfferCard />
                                </div>
                                <div className="second-accessory-wrapper">
                                    <AccessoryOfferCard />
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

        </div>
    )
}


export default Home