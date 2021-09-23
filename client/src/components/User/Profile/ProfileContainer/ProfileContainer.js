import './ProfileContainer.css'
import ProfileOrderedCard from './ProfileOrderedCard/ProfileOrderedCard'
import ProfileFavoritesCard from './ProfileFavoritesCard/ProfileFavoritesCard'


const ProfileContainer = (props) => {


    return (
        <article className="profile-content">
            <div className="profile-inner-container">
                <article className="profile-coffee-wrapper">
                    <h1>Favorites</h1>
                    <div className="profile-coffee-favorites">
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                        <ProfileFavoritesCard />
                    </div>
                </article>
            </div>
            <div className="profile-inner-container">
                <article className="profile-coffee-wrapper">
                    <h1>History</h1>
                    <div className="profile-coffee-ordered">
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                        <ProfileOrderedCard />
                    </div>
                </article>
            </div>
        </article>
    )
}


export default ProfileContainer