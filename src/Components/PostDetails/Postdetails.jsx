import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    const { id, title, userId, body } = post;
    return (
        <div>
            <h1>Details about this post</h1>
            <h2>user Id:{id}</h2>
            <h4>Title:{title}</h4>
            <p><small>{body}</small></p>
           

        </div>
    );
};

export default Postdetails;