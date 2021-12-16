import './Submenu.css'
import { Link, withRouter } from 'react-router-dom';
import GlobalContext from '../../../../contexts/global/GlobalContext';
import { useContext } from 'react';
import AuthService from '../../../../services/Auth/AuthService';


const Submenu = ({
    history
}) => {

    const [globalState, dispatch] = useContext(GlobalContext)

    function logoutHandler() {
        AuthService.logout()
            .then(() => {
                dispatch({ type: 'auth', payload: {} })
                history.push('/auth/login')
            })
    }

    return (
        <div className="coffee-bar-submenu-wrapper">
            <ul className="coffee-bar-submenu">
                <li className="coffee-bar-submenu-li">
                    <Link to="/" className="coffee-bar-submenu-link">Home</Link>
                </li>
                <li className="coffee-bar-submenu-li">
                    <Link to="/shop" className="coffee-bar-submenu-link">Coffee</Link>
                </li>
                {
                    globalState.auth?.username
                        ? <>
                            < li className="coffee-bar-submenu-li">
                                <Link to={`/user/${globalState.auth?._id}/profile`} className="coffee-bar-submenu-link">Profile</Link>
                            </li>
                            <li className="coffee-bar-submenu-li">
                                <Link to="/control-panel" className="coffee-bar-submenu-link">Control panel</Link>
                            </li>
                            <li>
                                <span className="navbar-link" onClick={logoutHandler}>Logout</span>
                            </li>
                        </>
                        : <>
                            <li className="coffee-bar-submenu-li">
                                <Link to="/auth/login" className="coffee-bar-submenu-link">Login</Link>
                            </li>
                            <li className="coffee-bar-submenu-li">
                                <Link to="/auth/register" className="coffee-bar-submenu-link">Register</Link>
                            </li>
                        </>
                }
            </ul>
        </div >
    )
}


export default withRouter(Submenu)