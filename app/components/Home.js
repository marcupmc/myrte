import React, { PropTypes } from 'react';
import _ from 'lodash';
import NavBar from './NavBar';

require ('../../assets/styles/components/nav-bar.scss');
require('../../assets/styles/pages/home.scss');

const Home = () => (
    <div className="myrte">
        <div id="main-picture" className="images--full"></div>
        <div className="nav-bar">
            <div className="nav-bar__logo">
                <img src="assets/images/logo.png"/>
            </div>
            <NavBar />
        </div>
        <div className="main-title">
            <span>L'authentique rhum arrangé artisanal</span>
        </div>
    </div>
);

Home.propTypes = {
};

export default Home;
