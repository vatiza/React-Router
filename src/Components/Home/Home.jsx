import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h4>Home Components</h4>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;