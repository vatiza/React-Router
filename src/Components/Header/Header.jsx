import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Post</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/notice">Notice</Link>
        </nav>
    );
};

export default Header;