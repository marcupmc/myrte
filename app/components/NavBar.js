import React, { PropTypes } from 'react';
import _ from 'lodash';

require ('../../assets/styles/components/nav-bar.scss');

const NavBar = () => (
    <div className="nav-bar__links">
        <ul>
            <li>Nos produits</li>
            <li>L'équipe</li>
            <li>Se connecter</li>
        </ul>
    </div>
);

NavBar.propTypes = {
};

export default NavBar;