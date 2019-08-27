import React, { Component } from 'react';
import Trend from 'react-trend';
import fetch from 'node-fetch';

class MiniChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coin: this.props.coin,
            data: null
        };
    }

    componentDidMount() {
        // construct the request
        const base_url = "https://api.coincap.io/v2/",
            resource = "assets/",
            ticker = `${this.state.coin}/`,
            endpoint = "history/",
            parameters = "?interval=d1";
        const request_url = base_url + resource + ticker + endpoint + parameters;
        // now perform the fetch
        fetch(request_url)
            .then(resp => resp.json())
            // get the relevant data array
            .then(data => data.data)
            // extract only the last 7 days worth of data
            .then(array => array.slice(array.length - 7, array.length))
            // extract the price data as a float, rounded out to 2 decimal places
            .then(array => array.map(item => Math.round(parseFloat(item.priceUsd) * 100) / 100))
            // lastly, update state
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div className="App">
                <Trend data={this.state.data} />
            </div>
        );
    }
}

export default MiniChart;