import './CoffeeTimer.css'

const CoffeeTimer = (props) => {

    return (
        <article className="coffee-timer">
            <div className="profile-coffee-taimer">
                <h2>Ordered Coffee</h2>
                <div className="coffee-inner-wrapper">
                    <div className="ordered-coffee-timer">
                        <h2>Espresso</h2>
                    </div>
                    <div className="profile-coffee-taimer-wrapper">
                        <div className="coffee-taimer-minutes">
                            <h2>00</h2>
                        </div>
                        <div className="coffee-taimer-dots">
                            <h2>:</h2>
                        </div>
                        <div className="coffee-taimer-seconds">
                            <h2>00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}


export default CoffeeTimer