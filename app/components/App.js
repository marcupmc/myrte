import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './Home';
import Shop from '../containers/Shop';

import store from '../store';

require('../../assets/styles/global.scss');

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    baseTheme: {
        palette: {
            primary1Color: '#0055A4',
        },
    },
});

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="/products" component={Shop} />
            </Router>
        </MuiThemeProvider>
    </Provider>
);

export default App;
