import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './Home';

require('../../assets/styles/global.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    datePicker: {
        selectColor: '#F46329',
    },
    flatButton: {
        primaryTextColor: '#F46329',
    },
    tableRow: {
        selectedColor: '#E8E8E8',
    },
    checkbox: {
        checkedColor: '#F46329',
    },
    stepper: {
        iconColor: '#F46329',
    },
    toggle: {
        thumbOnColor: '#F46329',
        trackOnColor: '#FFAD8D',
    },
    baseTheme: {
        palette: {
            primary3Color: '#FFFFFF',
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
