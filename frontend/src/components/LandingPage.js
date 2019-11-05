import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './subcomponents/SearchAppBar';
import LabelBottomNavigation from './subcomponents/LabelBottomNavigation';
import Box from '@material-ui/core/Box';
import CryptDemo from "../Images/CryptKeeper.gif";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.div = React.createRef();
        this.state = {
            dimensions: [],
            userPage: props.userPage,
            portfolioPage: props.portfolioPage
        };
    }

    componentDidMount() {
        // extract reference node in rendered JSX
        const node = ReactDOM.findDOMNode(this.div.current);
        // get the dimnensions of the top & bottom navs
        const dims = this.getBoxDimensions(node);
        // update state to reflect this knowledge
        this.setState({ dimensions: dims });
    }

    getBoxDimensions(node) {
        // get the dimensions of navbar & footer given a base node
        const navbar = node.getElementsByClassName('MuiPaper-root')[0],
            footer = node.getElementsByClassName('MuiBottomNavigation-root')[0];
        const navbarWidth = navbar.offsetWidth,
            navbarHeight = navbar.offsetHeight,
            footerWidth = footer.offsetWidth,
            footerHeight = footer.offsetHeight;
        return [navbarWidth, navbarHeight, footerWidth, footerHeight];
    }

    render() {
        return (
            <div style={ { background: '#09171E' } } ref={ this.div }>
                <Box display="flex" flexDirection="column">
                    <SearchAppBar
                        userPage={ this.state.userPage }
                        portfolioPage={ this.state.portfolioPage }
                    />

                    <div style={ { background: '#09171E', textAlign: 'center' } }>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={ { color: 'white', topMargin: 200 } } > Welcome to CryptKeeper!</h1>
                        <p style={ { color: 'white', margin: 20, fontSize: 18 } } >
                            CryptKeeper is designed to be a Progressive Web App built using React, Node, Express, PostgreSQL, and ChartJS to help crypto enthusiasts better track crypto currency acquisitions through custom portfolios that graphically displays the performance of their assets over time. After signing up for a secure account, the user is able to create multiple portfolios and track different sets of assets in each portfolio. Each portfolio can have assets added and deleted from it to accurately display the user’s current net portfolio value.
                        </p>
                        <p style={ { color: 'white', margin: 20, fontSize: 18 } } >
                            This project was originally started in React Native but after running into several issues that took considerable amount of time, we realized that we didn't need to use React Native to create the mobile App that we had envisioned.  Instead, we chose to build a Progressive Web App that could be turned into a mobile app with the time we had remaining to complete the project.  Although the app is toally functional, due to the short time frame of the project, this project has not yet been turned into a mobile app nor has it been adjusted to respond to larger than mobile screen sizes.  It is best viewed on an iPhone 6/7/8 Plus. Sorry for the inconveniece.
                        </p>
                        <p style={ { color: 'white', border: 10, margin: 10, fontSize: 18 } }> Please see a short demo below:</p>
                        <img src={ CryptDemo } alt={ 'CryptKeeper' } style={ { marginBottom: 100 } }></img>
                    </div>

                    <LabelBottomNavigation />
                </Box>
            </div >
        )
    }
}

export default LandingPage;
