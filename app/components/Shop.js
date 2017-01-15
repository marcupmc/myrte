import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import NavBar from './NavBar';
import RaisedButton from 'material-ui/RaisedButton';

require ('../../assets/styles/components/nav-bar.scss');
require('../../assets/styles/pages/home.scss');
require('../../assets/styles/molecules/center-button.scss');
require('../../assets/styles/molecules/process.scss');


export default class Shop extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shop">
                <NavBar />
                <div>
                    <h3>Coming soon, some products...</h3>
                </div>
            </div>
        );
    }
}

Shop.propTypes = {
};
