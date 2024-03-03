import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    const { id, title, userId, body } = post;
    const navigate = useNavigate();
    const hanelGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Details about this post</h1>
            <h2>user Id:{id}</h2>
            <h4>Title:{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={hanelGoBack}>Go Back</button>


        </div>
    );
};

export default Postdetails;