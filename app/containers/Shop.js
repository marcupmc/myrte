import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import NavBar from '../components/NavBar';

import { fetchProducts } from '../actions/products';

require('../../assets/styles/components/nav-bar.scss');
require('../../assets/styles/pages/home.scss');
require('../../assets/styles/molecules/center-button.scss');
require('../../assets/styles/molecules/process.scss');


export class Shop extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    addToCart() {
        return null;
    }

    removeFromCart() {
        return null;
    }

    validateCart() {
        return null;
    }

    render() {
        const { products } = this.props;
        return (
            <div className="shop">
                <NavBar />
                <div>
                    <h3>Coming soon, some products...</h3>
                    {
                        _.map(products, p =>
                            <div key={p.name}>{p.name}</div>
                        )
                    }
                </div>
            </div>
        );
    }
}

Shop.propTypes = {
    products: PropTypes.array,
    fetching: PropTypes.bool,
};

function mapStateToProps(state) {
    const products = _.get(state, 'products.allProducts');
    const isFetching = _.get(state, 'products.fetching');
    return {
        products,
        isFetching,
    };
}

export default connect(mapStateToProps)(Shop);
