import './Profile.css'
import ProfileHeading from './ProfileHeading/ProfileHeading'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import CoffeeTimer from '../../shared/CoffeeTimer/CoffeeTimer'


const Profile = (props) => {

    
    return (
        <div className="profile-layout">
            <ProfileHeading />
            <section className="profile-container-section">
                <div className="profile-wrapper">
                    <ProfileHeader />
                    <CoffeeTimer />
                    <ProfileContainer />
                </div>
            </section>
        </div>
    )
}


export default Profile