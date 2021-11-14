import './ProfileContainer.css'
import ProfileOrderedCard from './ProfileOrderedCard/ProfileOrderedCard'
import ProfileFavoritesCard from './ProfileFavoritesCard/ProfileFavoritesCard'
import { useState, useEffect } from 'react'
import orderService from '../../../../services/Order/OrderService'

const ProfileContainer = ({
    favorites,
    ordered
}) => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        orderService.getOrders()
            .then(data => setOrders(() => (data)))
            .catch(console.log)
    }, [])

    return (
        <article className="profile-content">
            <div className="profile-inner-container">
                <article className="profile-coffee-wrapper">
                    <h1>Favorites</h1>
                    <div className="profile-coffee-favorites">
                        {
                            favorites?.map(x => <ProfileFavoritesCard key={x._id} data={x} />)
                        }

                    </div>
                </article>
            </div>
            <div className="profile-inner-container">
                <article className="profile-coffee-wrapper">
                    <h1>History</h1>
                    <div className="profile-coffee-ordered">
                        {
                            orders?.map(x => <ProfileOrderedCard key={x._id} data={x} />)
                        }

                    </div>
                </article>
            </div>
        </article>
    )
}


export default ProfileContainer