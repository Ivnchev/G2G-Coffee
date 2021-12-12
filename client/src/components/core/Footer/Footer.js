import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = (props) => {


    return (
        <footer className="footer">
            <article className="footer-wrapper">
                <div className="footer-container">



                    <div className="footer-nav-map footer-row">
                        <ul className="footer-bar">
                            <li><img className="coffee-bar-logo footer-logo" src="/logo.svg" alt="coffee-logo" /></li>
                            <li>
                                <Link to="/about-us" className="footer-bar-link">About us</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="footer-bar-link">Make an order</Link>
                            </li>
                            <li>
                                <Link to="/question-and-answers" className="footer-bar-link">Q&A</Link>
                            </li>
                        </ul>
                        <ul className="footer-social">
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-youtube"></i></li>
                        </ul>
                    </div>
                    <div className="footer-row footer-contacts">
                        <article>
                            <p className="contacts-title">Contacts</p>
                            <ul className="contacts-list">
                                <li><span><i className="fas fa-user-headset"></i></span><p> +359 898 98 98 98</p></li>
                                <li><span><i className="fas fa-map-marked-alt"></i></span><p> Sofia, str. Somewhere, A214</p></li>
                                <li><span><i className="fad fa-clock"></i></span><p> Monday - Friday, 08:00 - 17:00</p></li>
                                <li><span><i className="fas fa-at"></i></span><p>support@gottagocoffee.com</p></li>
                            </ul>
                        </article>
                    </div>
                    <div className="footer-row footer-terms">
                        <ul className="footer-terms-list">
                            <li><Link to="/terms-and-privacy">Terms of Service</Link></li>
                            <li><Link to="/privacy-notice">Privacy Notice</Link></li>
                            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-row footer-terms rights">
                        <p className="rights">All rights reserved! &copy;</p>
                    </div>
                </div>
            </article>
        </footer>
    )
}


export default Footer