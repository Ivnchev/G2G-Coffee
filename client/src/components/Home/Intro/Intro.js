import './Intro.css'
import { Link } from 'react-router-dom'



const Intro = (props) => {


    return (
        <section className="home-intro" id="home-intro">
            <div className="home-intro-image-wrapper">
                <img className="home-intro-image" src="/images/home/food-2940544_1920.jpg" alt="" />
                <p className="home-intro-title">Need a coffee ?</p>
                <p className="home-intro-description">Make your morning better. Take a cup of coffee from best barista in your town.</p>
                <Link to="/shop">
                    <input type="button" className="home-intro-button" value="Order Now" />
                </Link>
            </div>
        </section>
    )
}


export default Intro