
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = ({ friend }) => {
    const { email, name, id, phone } = friend;
    return (
        <div className="friend-details">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone :{phone}</p>
            <p><Link to={`/friend/${id}`}>show me details</Link></p>


        </div>
    );
};

export default Friend;