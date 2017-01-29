import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import NavBar from '../components/NavBar';
import Product from '../components/Product';

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
            <div className="shop" style={{ background: '#F5F3EE', height: '100vh' }}>
                <NavBar />
                <div style={{ width: '600px', margin: 'auto' }}>
                    <div style={{ textAlign: 'center', fontFamily: 'Petit Formal Script', fontSize: '2.3em' }}>
                        <h3>Nos meilleurs produits</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            _.map(products, (p, index) =>
                                <Product product={p} key={index} />
                            )
                        }
                    </div>
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
    const products = _.orderBy(_.get(state, 'products.allProducts'), 'position');
    const isFetching = _.get(state, 'products.fetching');
    return {
        products,
        isFetching,
    };
}

export default connect(mapStateToProps)(Shop);
