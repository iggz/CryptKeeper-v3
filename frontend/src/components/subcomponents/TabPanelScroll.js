import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import RowBadge from '../subcomponents/RowBadge';
import RowItem from '../subcomponents/RowItem';
import '../../styles/Row.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#1e2632'
    },
}));

const ScrollableTabsButtonAuto = (props) => {
    const labels = props.labels;
    const data = props.data;
    const labelHandler = props.labelHandler;

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const store = sessionStorage;
    const isLoggedIn = store.getItem('user');

    function handleChange(event, newValue) {
        setValue(newValue);

        const current_tab = labels[newValue];
        store.setItem('tab', current_tab);
    }

    return (
        <>
            {isLoggedIn ? (
                <div className={classes.root} >
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            onClick={labelHandler}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {labels.map((name, index) => {
                                return <Tab
                                    label={name}
                                    {...a11yProps(index)}
                                    key={index}
                                />
                            })}
                        </Tabs>
                    </AppBar>
                    {data.map((portfolio, index) => {
                        const key = Object.keys(portfolio)[0];

                        return (
                            <TabPanel value={value} index={index} key={index}>
                                {portfolio[key].map((obj, index) => {
                                    const name = obj.name;
                                    const symbol = obj.symbol;
                                    const price = obj.price;
                                    const amount = obj.amount;
                                    const data = {
                                        price: price,
                                        percent_change: amount
                                    };
                                    return (
                                        <div className="row-div" key={index}>
                                            <RowBadge
                                                name={name}
                                                ticker={symbol}
                                            />
                                            <RowItem data={data} />
                                        </div>
                                    )
                                })
                                }
                            </TabPanel>
                        )
                    })
                    }
                </div >
            ) : (
                    <Redirect to="/three" />
                )}
        </>
    )
}

export default ScrollableTabsButtonAuto;