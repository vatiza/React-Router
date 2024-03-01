
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>THis is my friends</h1>
        </div>
    );
};

export default Friends;