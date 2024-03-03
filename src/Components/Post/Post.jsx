import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';
const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handelNavigation = () => {
        navigate(`/post/${id}`);

    }
    return (
        <div className='post-body'>
            <h4>Id:{id}</h4>
            <p> Title: {title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show post Details</button>
            <button onClick={handelNavigation}>Button Handler</button>

        </div>
    );
};

export default Post;