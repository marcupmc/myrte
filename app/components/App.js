import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './Home';

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
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
            </Route>
        </Router>
    </MuiThemeProvider>
);

export default App;
