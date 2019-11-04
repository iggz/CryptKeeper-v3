import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './subcomponents/SearchAppBar';
import LabelBottomNavigation from './subcomponents/LabelBottomNavigation';
import Box from '@material-ui/core/Box';
// import Logo from "../Images/CryptKeeper.jpg";

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
            <div style={ { height: '100%', background: '#09171E' } } ref={ this.div }>
                <Box display="flex" flexDirection="column">
                    <SearchAppBar
                        userPage={ this.state.userPage }
                        portfolioPage={ this.state.portfolioPage }
                    />
                    <Box flex="1"
                        overflow="auto"
                        display="flex"
                        flexDirection="column"
                        alignItems="stretch"
                    >
                        { this.state.dimensions ? (
                            <>
                                <Box
                                    style={ {
                                        marginTop: `${this.state.dimensions[1]}px`,
                                        marginBottom: `${this.state.dimensions[3]}px`
                                    } }
                                >
                                    { this.props.children }
                                </Box>

                            </>
                        ) : (
                                <></>
                            ) }
                    </Box>
                    <div style={ { height: 600, background: '#09171E', textAlign: 'center' } }>
                        {/* <img src={ Logo } alt={ 'CryptKeeper' }></img> */ }
                        <h1 style={ { color: 'white' } } > Welcome to CryptKeeper!</h1>
                        <br></br>
                        <p style={ { color: 'white' } } >
                            CryptKeeper is designed to be a Progressive Web App
                        </p>
                        <p style={ { color: 'white', border: 10, margin: 10 } } >
                            This project was originally started in React Native but after a short development period, we realized that we didn't need to use React Native to build our App.  Instead we chose to build a PWA which could be turned into a mobile app.  However, due to the short time frame of the project, this project has not yet been turned into a mobile app nor has it been adjusted to respond to larger than mobile screen sizes.  It is best viewed on an iPhone 6/7/8 Plus. Sorry for the inconveniece.
                        </p>
                    </div>

                    <LabelBottomNavigation />
                </Box>
            </div >
        )
    }
}

export default LandingPage;
