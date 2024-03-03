import Activelink from '../ActiveLink/Activelink';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Post</Link>
            <Activelink to="/Friends">Friends</Activelink>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/notice">Notice</Link>
        </nav>
    );
};

export default Header;