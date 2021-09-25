import './Header.css'
import { Link } from 'react-router-dom';


import Submenu from './Submenu/Submenu'

import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../../contexts/global/GlobalContext';
import AuthService from '../../../services/Auth/AuthService';


const Header = ({
    history
}) => {
    const [submenu, setSubmenu] = useState(false)
    const [globalState, dispatch] = useContext(GlobalContext)

    useEffect(() => {
        setSubmenu(false)

        return () => {
            
        }
    }, [history])

    function toggleSubMenu() {
        submenu ? setSubmenu(false) : setSubmenu(true)
    }

    function logoutHandler() {
        AuthService.logout()
            .then(() => {
                dispatch({ type: 'auth', payload: {} })
            })
    }

    window.onresize = function () {
        if(window.innerWidth > 600) {
            setSubmenu(false)
        }
    }

    return (
        <header className="coffee-bar">
            <div className="coffee-bar-wrapper">
                <Link to="/">
                    <img className="coffee-bar-logo" src="/logo.svg" alt="coffee-logo" />
                </Link>
                <div className="coffee-bar-mini-menu-button" onClick={toggleSubMenu}>
                    <i className="far fa-bars"></i>
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
                                globalState.auth?.username
                                    ? <>
                                        <li>
                                            <Link to={`/user/${globalState.auth?._id}/profile`} className="navbar-link">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/control-panel" className="navbar-link">Control panel</Link>
                                        </li>
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


export default Header