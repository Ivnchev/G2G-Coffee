import './ProfileHeader.css'
import { Link } from 'react-router-dom'



const ProfileHeader = ({
    user
}) => {


    return (
        <header className="profile-header-wrapper">
            <div className="profile-header-image-wrapper">
                <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
            </div>
            <div className="profile-header-data-wrapper">
                <div className="profile-header-container">
                    <h3>{user?.favorites?.length}</h3>
                    <p>Favorites</p>
                </div>
                <div className="profile-header-container">
                    <h3>{user?.ordered?.length}</h3>
                    <p>Ordered</p>
                </div>
            </div>
            <div className="profile-header-data-wrapper">
                <Link to={`/user/${user?._id}/edit`}><button>Edit profile</button></Link>
            </div>
        </header>
    )
}


export default ProfileHeader

