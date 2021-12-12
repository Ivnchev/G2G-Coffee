import './Profile.css'
import ProfileHeading from './ProfileHeading/ProfileHeading'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import LastCoffee from '../../shared/LastCoffee/LastCoffee'
import { useState, useEffect, useContext } from 'react'
import userService from '../../../services/User/UserService'
import orderService from '../../../services/Order/OrderService'
import GlobalContext from '../../../contexts/global/GlobalContext'

const Profile = ({
    match
}) => {

    const dispatch = useContext(GlobalContext)[1]
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])

    useEffect(() => {
        userService.user(match.params.id)
            .then(user => setUser(s => (user)))
            .catch(error => {
                dispatch({ type: 'error', payload: error })
            })
        orderService.getOrders()
            .then(data => setOrders(() => (data)))
            .catch(error => {
                dispatch({ type: 'error', payload: error })
            })
    }, [match.params.id, dispatch])

    return (
        <div className="profile-layout">
            <ProfileHeading user={user} />
            <section className="profile-container-section">
                <div className="profile-wrapper">
                    <ProfileHeader user={user} />
                    <LastCoffee lastOrder={orders[0] || {}} />
                    <ProfileContainer favorites={user.favorites} ordered={orders} />
                </div>
            </section>
        </div>
    )
}


export default Profile