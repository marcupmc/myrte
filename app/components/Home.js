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


export default class Home extends Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="myrte">
                <div id="main-picture" className="images--full">
                    <NavBar />
                    <div className="main-title">
                        <span>L'authentique rhum arrangé artisanal</span>
                    </div>
                    <div className="center-button__wrapper">
                        <RaisedButton backgroundColor="#0055A4" labelColor='#FFFFFF' label="Voir nos produits" fullWidth={false} />
                    </div>
                </div>
                <div className="how_it_works">
                    <div style={{textAlign: 'center', padding: '20px', fontSize: '1.6em'}}>Comment ça marche ?</div>
                    <div className="process">
                        <div className="process__element">
                            <Avatar size={80} icon={<FontIcon className="material-icons" >local_bar</FontIcon>} />
                            <div className="process__description">Sélectionnez votre rhum</div>
                        </div>
                        <div className="process__element">
                            <Avatar size={80} icon={<FontIcon className="material-icons" >build</FontIcon>} />
                            <div className="process__description">Préparation Artisanale du rhum</div>
                        </div>
                        <div className="process__element">
                            <Avatar size={80} icon={<FontIcon className="material-icons" >directions_bike</FontIcon>} />
                            <div className="process__description">Livraison à Domicile</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};
