import './ProfileHeading.css'

const ProfileHeading = ({
    user
}) => {


    return (
        <div className="profile-heading-image">
            <h1>Welcome, {user?.username}</h1>
        </div>
    )
}


export default ProfileHeading