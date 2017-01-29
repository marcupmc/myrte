import React, { PropTypes } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
require ('../../assets/styles/components/nav-bar.scss');

const Product = ({ product }) => (
    <Card style={{ width: '290px' }}>
        <CardMedia
          overlay={<CardTitle title={product.name} style={{ fontFamily: 'Petit Formal Script' }} />}
        >
            <img src={product.image_url} height='200px' alt="product" />
        </CardMedia>
        <CardText>
            {product.description}
        </CardText>
        <CardActions>
            <FlatButton label="Selectionner" />
        </CardActions>
    </Card>
);

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
