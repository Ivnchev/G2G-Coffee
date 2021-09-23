import './ProfileFavoritesCard.css'
import { Link } from 'react-router-dom'

const ProfileFavoritesCard = (props) => {


    function removeHandler(e) {
        e.currentTarget.parentNode.parentNode.remove()
    }

    return (
        <div className="favorites-card-wrapper">
            <div className="favorites-image-wrapper">
                <img src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />

            </div>
            <div className="favorites-container-wrapper">
                <h1>Espresso</h1>
                <Link to="/product/asd/order">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <i className="fas fa-trash" onClick={removeHandler}></i>
            </div>
        </div>
    )
}


export default ProfileFavoritesCard