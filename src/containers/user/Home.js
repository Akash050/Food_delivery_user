import React, { useState } from 'react';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';
import { Route, Switch } from "react-router-dom";
import routes from '../../routes'
import TheContent from './TheContent';
const Home = () => {
    return (
        <>
            <HomeBody />
        </>);
}

export default Home;