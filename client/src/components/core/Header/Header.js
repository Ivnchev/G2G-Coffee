import './Header.css'
import { Link } from 'react-router-dom';


import Submenu from './Submenu/Submenu'

import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../../contexts/global/GlobalContext';
import AuthService from '../../../services/Auth/AuthService';
import { withRouter } from "react-router";
import WeatherHeader from '../../shared/WeatherHeader/WeatherHeader';
import weatherService from '../../../services/Weather/WeatherService';



const Header = ({
    history
}) => {
    const [context, dispatch] = useContext(GlobalContext)
    const [submenu, setSubmenu] = useState(false)
    const [location, setLocation] = useState({})


    useEffect(() => {
        setSubmenu(false)

        if (!location.weather) {
            navigator.geolocation.getCurrentPosition((position) => {
                weatherService.get(position.coords.latitude, position.coords.longitude)
                    .then(data => {
                        setLocation(s => ({ ...s, weather: data }))
                    })
                    .catch(err => {
                        dispatch({ type: 'error', payload: err })
                    })
            })
        }

        return () => { }

    }, [history, dispatch, location.weather])

    function toggleSubMenu() {
        submenu ? setSubmenu(false) : setSubmenu(true)
    }

    function logoutHandler() {
        AuthService.logout()
            .then(() => {
                dispatch({ type: 'auth', payload: {} })
                history.push('/auth/login')
            })
    }



    window.onresize = function () {
        if (window.innerWidth > 600) {
            setSubmenu(false)
        }
    }

    return (
        <header className="coffee-bar">
            <div className="coffee-bar-wrapper">
                <div className="coffee-bar-logo-wrapper">
                    <Link to="/">
                        <img className="coffee-bar-logo" src="/logo.svg" alt="coffee-logo" />
                    </Link>
                    <WeatherHeader data={location.weather} />
                </div>
                <div className="coffee-bar-mini-menu-button" onClick={toggleSubMenu}>
                    {
                        submenu
                            ? <i className="far fa-times"></i>
                            : <i className="far fa-bars"></i>
                    }
                </div>

                {
                    submenu
                        ? <Submenu isTriggered={submenu} />
                        : <ul className="coffee-bar-nav">
                            <li>
                                <Link to="/" className="navbar-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="navbar-link">Coffee</Link>
                            </li>
                            {
                                context.auth?.username
                                    ? <>
                                        <li>
                                            <Link to={`/user/${context.auth?._id}/profile`} className="navbar-link">Profile</Link>
                                        </li>
                                        {
                                            context.auth.role === 'admin'
                                                ? <li>
                                                    <Link to="/control-panel" className="navbar-link">Control panel</Link>
                                                </li>
                                                : ''
                                        }
                                        <li>
                                            <span className="navbar-link" onClick={logoutHandler}>Logout</span>
                                        </li>
                                    </>
                                    : <>
                                        <li>
                                            <Link to="/auth/login" className="navbar-link">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/register" className="navbar-link">Register</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                }
            </div>
        </header>
    )
}


export default withRouter(Header)