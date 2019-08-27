import React, { Component } from 'react';
import fetch from 'node-fetch';
import WatchExpansionPanel from './subcomponents/WatchExpansionPanel';

class WatchIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            rendered: false
        };
    }

    componentDidMount() {
        // construct the request
        const proxy = "https://cors-anywhere.herokuapp.com/",
            base_url = "https://api.coincap.io/v2/",
            resource = 'assets';
        const request_url = proxy + base_url + resource;
        // now perform the fetch
        fetch(request_url)
            .then(resp => resp.json())
            // extract the data array
            .then(data => data.data)
            // update state with list of all (id, name, ticker) tuples as objects
            .then(array => array.map(item => {
                return (
                    {
                        id: item.id,
                        name: item.name,
                        ticker: item.symbol
                    }
                );
            }))
            // update state
            .then(array => this.setState({
                list: array,
                rendered: !this.state.rendered
            }));
    }

    render() {
        if (this.state.rendered) {
            return (
                <>
                    { this.state.list.map((item, index) => (
                        < div border={ 10 } key={ index } >
                            <div style={ { height: .5, background: '#00C689' } }></div>
                            <WatchExpansionPanel
                                dataArray={ [] }
                                style={ { background: '#09171E' } }
                                id={ item.id }
                                name={ item.name }
                                ticker={ item.ticker }

                            />
                            <div style={ { height: .5, background: '#00C689' } }></div>
                        </div>

                    )) }

                </>
            )
        } else {
            // handles the initial case before state is populated
            // with API response containing cryptocurrencies
            return (
                <div></div>
            )
        }
    }
    _HistoryCall = async (id) => {
        const proxy = "https://cors-anywhere.herokuapp.com/",
            base_url = "https://api.coincap.io/v2/",
            resource = "assets/",
            history = "/history?interval=d1";
        const request_url = proxy + base_url + resource + id + history;

        const response = await fetch(request_url)
        const responseJSON = await response.json()
        const { data } = responseJSON;
        return data

    }
}

export default WatchIndex;
