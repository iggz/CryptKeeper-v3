import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import List from '@material-ui/icons/List';
import TrendingUp from '@material-ui/icons/TrendingUp';
import AccountBox from '@material-ui/icons/AccountBox';
import DonutLarge from '@material-ui/icons/DonutLarge';


// import BaseTemplate from '../BaseTemplate';
// import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
    root: {

        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: '#1E2632',

    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (

        <BottomNavigation style={ { color: '#00C689' } } value={ value } onChange={ handleChange } className={ classes.root }>
            <BottomNavigationAction style={ { color: '#00C689' } }
                label="Demo"
                value="Demo"
                icon="Demo"
                component={ Link }
                to="/"
            />
            <BottomNavigationAction style={ { color: '#00C689' } }
                label="Dashboard"
                value="dashboard"
                icon={ <List style={ { color: '#00C689' } } /> }
                component={ Link }
                to="/one"
            />
            <BottomNavigationAction style={ { color: '#00C689' } }
                label="Charts"
                value="charts"
                icon={ <TrendingUp style={ { color: '#00C689' } } /> }
                component={ Link }
                to="/two"
            />
            <BottomNavigationAction style={ { color: '#00C689' } }
                label="Portfolio"
                value="portfolio"
                icon={ <DonutLarge style={ { color: '#00C689' } }></DonutLarge> }
                component={ Link }
                to="/three"
            />
            <BottomNavigationAction style={ { color: '#00C689' } }
                label="Account"
                value="account"
                icon={ <AccountBox style={ { color: '#00C689' } } /> }
                component={ Link }
                to="/four"
            />
        </BottomNavigation>

    );
}