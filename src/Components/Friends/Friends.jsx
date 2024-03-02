
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData();

    return (
        <div>
            <h1>Total Friends:{data.length}</h1>
            {
                data.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;