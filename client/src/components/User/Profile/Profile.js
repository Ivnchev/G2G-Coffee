import './Profile.css'
import ProfileHeading from './ProfileHeading/ProfileHeading'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import CoffeeTimer from '../../shared/CoffeeTimer/CoffeeTimer'
import { useState, useEffect } from 'react'
import userService from '../../../services/User/UserService'

const Profile = ({
    match
}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        userService.user(match.params.id)
            .then(user => setUser(s => (user)))
            .catch(console.log)
    }, [match.params.id])

    return (
        <div className="profile-layout">
            <ProfileHeading />
            <section className="profile-container-section">
                <div className="profile-wrapper">
                    <ProfileHeader user={user} />
                    <CoffeeTimer />
                    <ProfileContainer favorites={user.favorites} ordered={user.ordered} />
                </div>
            </section>
        </div>
    )
}


export default Profile