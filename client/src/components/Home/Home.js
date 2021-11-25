import './Home.css'
import { useEffect, useState, useContext } from 'react';
import Intro from './Intro/Intro'
import TopProductCard from './TopProductCard/TopProductCard'
import OfferCard from './OfferCard/OfferCard'
import AccessoryOfferCard from './AccessoryOfferCard/AccessoryOfferCard';
import productService from '../../services/Products/ProductService';
import GlobalContext from '../../contexts/global/GlobalContext';



const Home = (props) => {

    const dispatch = useContext(GlobalContext)[1]
    const [topProducts, setTopProducts] = useState([])
    const [dailyProducts, setDailyProducts] = useState([])
    const [accessoriesProducts, setAccessoriesProducts] = useState([])

    useEffect(() => {
        Promise.all([
            productService.getProducts('top'),
            productService.getProducts('daily'),
            productService.getProducts('accessories')
        ])
            .then(([top, daily, accessories]) => {
                setTopProducts(s => top)
                setDailyProducts(s => daily)
                setAccessoriesProducts(s => accessories)
            })
            .catch(error => {
                dispatch({ type: 'error', payload: error })
            })
    }, [setTopProducts, dispatch])


    return (
        <div className="home-container">
            <Intro />
            <section className="home-top-products">
                <div className="home-top-products-wrapper">
                    <p className="home-top-products-title">Top coffee products</p>
                    <article className="products-container">
                        {
                            topProducts
                                .map(x => (<TopProductCard key={x._id} data={x} />))
                        }
                    </article>
                </div>
            </section>
            <div className="offer-container">
                <section className="daily-offer">
                    <div className="daily-offer-wrapper">
                        <article className="daily-offer-container">
                            <p className="home-top-products-title">Daily offers</p>
                            <div className="daily-hot-offers">
                                {
                                    dailyProducts
                                        .map(x => <OfferCard key={x._id} data={x} />)
                                }
                            </div>
                        </article>
                    </div>
                </section>
                <section className="accessory-offers">
                    <div className="accessory-offers-wrapper">
                        <article className="accessory-offers-container">
                            <p className="home-top-products-title">Accessory offers</p>
                            {
                                accessoriesProducts.length > 0
                                    ? (
                                        <div className="top-accessories">
                                            <div className="first-accessory-wrapper">
                                                {
                                                    <AccessoryOfferCard data={accessoriesProducts[0]} />
                                                }
                                            </div>
                                            {
                                                accessoriesProducts.length > 1
                                                    ? (
                                                        <div className="second-accessory-wrapper">
                                                            {
                                                                <AccessoryOfferCard data={accessoriesProducts[1]} />
                                                            }
                                                        </div>
                                                    )
                                                    : ''
                                            }
                                        </div>
                                    )
                                    : 'No Offers'
                            }
                        </article>
                    </div>
                </section>
            </div>

        </div>
    )
}


export default Home