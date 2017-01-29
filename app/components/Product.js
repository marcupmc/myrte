import React, { PropTypes } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
require ('../../assets/styles/components/nav-bar.scss');

const Product = ({ product }) => (
    <Paper zDepth={1} style={{ position: 'relative', width: '270px', height: '300px', backgroundImage: `url(${product.image_url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
            <div style={{ padding: '10px', color: '#FFFFFF', textAlign: 'center', fontFamily: 'Petit Formal Script', fontSize: '2em' }}>
                {product.name}
            </div>
            <div>
                <RaisedButton backgroundColor="#0055A4" labelColor="#FFFFFF" label="Selectionner" fullWidth />
            </div>
        </div>
    </Paper>
);

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
