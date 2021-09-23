import './ProfileHeader.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../../../../contexts/global/GlobalContext'


const ProfileHeader = (props) => {

    const [globalState] = useContext(GlobalContext)

    return (
        <header className="profile-header-wrapper">
            <div className="profile-header-image-wrapper">
                <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
            </div>
            <div className="profile-header-data-wrapper">
                <div className="profile-header-container">
                    <h3>22</h3>
                    <p>Orders</p>
                </div>
                <div className="profile-header-container">
                    <h3>22</h3>
                    <p>Orders</p>
                </div>
                <div className="profile-header-container">
                    <h3>22</h3>
                    <p>Orders</p>
                </div>
            </div>
            <div className="profile-header-data-wrapper">
                <Link to={`/user/${globalState.auth?._id}/edit`}><button>Edit profile</button></Link>
            </div>
        </header>
    )
}


export default ProfileHeader

