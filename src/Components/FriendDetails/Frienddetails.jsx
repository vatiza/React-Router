import { useLoaderData } from "react-router-dom";


const Frienddetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h2>Everything friend  is heare</h2>
            <h3>Name :{friend.name}</h3>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default Frienddetails;