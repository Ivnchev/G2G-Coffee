import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = (props) => {


    return (
        <div className="not-found">
            <div>
                <h1>404</h1>
                <h4>You seem lost</h4>
                <p>Yeah, we're as confused as you are, you took the wrong turn and came here. Luckily unlike some mistakes, you can fix this</p>
                <Link to="/">Go Home</Link>
                <img src="images/error/sad_boy.png" alt="" />
            </div>
        </div>
    )
}


export default NotFound