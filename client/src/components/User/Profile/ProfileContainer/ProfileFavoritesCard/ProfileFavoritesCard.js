import './ProfileFavoritesCard.css'
import { Link } from 'react-router-dom'

const ProfileFavoritesCard = ({
    data
}) => {


    function removeHandler(e) {
        e.currentTarget.parentNode.parentNode.remove()
    }

    return (
        <div className="favorites-card-wrapper">
            <div className="favorites-image-wrapper">
                <img src={data.imageURL} alt="" />

            </div>
            <div className="favorites-container-wrapper">
                <h1>{data.title}</h1>
                <Link to={`/product/${data._id}/order`}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <i className="fas fa-trash" onClick={removeHandler}></i>
            </div>
        </div>
    )
}


export default ProfileFavoritesCard