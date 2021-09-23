import './ProfileOrderedCard.css'


const ProfileOrderedCard = (props) => {


    return (
        <div className="ordered-card-wrapper">
            <div className="ordered-card-container">
                <h1>Espresso</h1>
                <span>Ordered at: 01/01/2021 - 14:25</span>
                <p>Will be ready at: <span>14:35</span></p>
                <p>Not Paid</p>
            </div>
        </div>
    )
}


export default ProfileOrderedCard