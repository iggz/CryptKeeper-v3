// stateful component representing the Portfolio page in which
// a given user is able to setup a set of portfolios

import React, { Component } from 'react';
import BaseTemplate from '../BaseTemplate';

import AddCoinModal from '../Forms/AddCoinModal';
import TabPanelScroll from '../subcomponents/TabPanelScroll';

import NewDonut from '../Charts/NewDonut';

class PortfolioView extends Component {
    constructor(props) {
        super(props);

        const store = sessionStorage;
        const user_id = store.getItem('user');
        let portfolios = store.getItem('portfolios');

        if (portfolios) {
            portfolios = portfolios.split(" ").map(item => {
                return parseInt(item)
            });
        }

        this.state = {
            userId: user_id,
            isLoggedIn: user_id ? true : false,
            portfolios: portfolios,
            portfolioLabels: [],
            data: [],
            rerender: false,
            coinValues: [],
            coinLabels: []
        };

        this.labelHandler = this.labelHandler.bind(this);
        this.fetchCurrentPrices = this.fetchCurrentPrices.bind(this);
    }

    async labelHandler() {
        const store = sessionStorage;
        const current_tab = store.tab;

        const current_index = this.state.portfolioLabels.indexOf(current_tab);
        const current_coins = this.state.data[current_index][current_tab];

        const coins = current_coins.map(coin => {
            return coin.name.toLowerCase();
        });
        const coinsAndAmountsAndSymbols = current_coins.map(coin => {
            return [coin.name.toLowerCase(), coin.amount, coin.symbol];
        });

        const data = await this.fetchCurrentPrices(coins);

        const coin_values = [];
        const coin_symbols = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === coins[i]) {
                const price = data[i][1];
                const amount = coinsAndAmountsAndSymbols[i][1];
                const symbol = coinsAndAmountsAndSymbols[i][2];

                const totalValue = price * amount;

                coin_values.push(totalValue);
                coin_symbols.push(symbol);
            }
        }

        this.setState({
            rerender: true,
            coinValues: coin_values,
            coinLabels: coin_symbols
        });
    }

    async componentDidMount() {
        const url = `http://localhost:9000/portfolios/${this.state.userId}/get`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                portfolios: this.state.portfolios
            })
        });
        const raw_data = await response.json();
        const data = raw_data.data;
        const labels = Object.keys(data).map(id => {
            return data[id].name
        });

        const portfolioData = Object.keys(data).map(id => {
            const portfolio = data[id];
            const name = portfolio.name;
            const coins = portfolio.coins;
            const ret_obj = {};
            ret_obj[name] = coins;
            return ret_obj;
        });

        this.setState({
            portfolioLabels: labels,
            data: portfolioData
        });
    }

    async fetchCurrentPrices(coins) {
        const data = [];
        for (let i = 0; i < coins.length; i++) {
            // construct the request
            const proxy = "https://cors-anywhere.herokuapp.com/",
                base_url = "https://api.coincap.io/v2/",
                resource = 'assets/',
                id = coins[i];
            const request_url = proxy + base_url + resource + id;

            try {
                // now perform the fetch
                const response = fetch(request_url)
                    .then(resp => resp.json())
                    // extract the data object
                    .then(data => {
                        return [id, data.data.priceUsd];
                    });
                data.push(await response);
            } catch (error) {
                console.log("unable to fetch:", id);
                data.push([id, 0]);
            }
        }

        return data;
    }

    render() {
        const portfolioPage = true;

        return (
            <>
                { this.state.isLoggedIn ? (
                    this.state.rerender ? (
                        <BaseTemplate portfolioPage={ portfolioPage }>
                            <h1 style={ { background: '#1e2632', margin: 0, height: 60, color: '#3F51B5', textAlign: 'center', padding: 10 } }>Portfolio View</h1>
                            <NewDonut
                                data={ this.state.coinValues }
                                labels={ this.state.coinLabels }
                            />
                            <TabPanelScroll
                                labels={ this.state.portfolioLabels }
                                data={ this.state.data }
                                labelHandler={ this.labelHandler }
                            />
                            <div style={ { background: '#1e2632', height: 400 } }>
                                <AddCoinModal />
                            </div>
                        </BaseTemplate>
                    ) : (
                            <BaseTemplate portfolioPage={ portfolioPage }>
                                <h1 style={ { background: '#1e2632', margin: 0, height: 60, color: '#3F51B5', textAlign: 'center', padding: 10 } }>Portfolio View</h1>
                                <TabPanelScroll
                                    labels={ this.state.portfolioLabels }
                                    data={ this.state.data }
                                    labelHandler={ this.labelHandler }
                                />
                                <div style={ { background: '#1e2632', height: 400 } }></div>
                            </BaseTemplate>)
                ) : (
                        <BaseTemplate>
                            <h1 style={ { background: '#0D1C25', margin: 0, height: 60, color: '#3F51B5', textAlign: 'center', padding: 10 } }>Portfolio List View</h1>
                            <p style={ { background: '#1e2632', margin: 0, height: 60, color: '#3F51B5', textAlign: 'center', padding: 10 } }>You are currently not logged in. Please login or create a user and login.</p>
                        </BaseTemplate>
                    ) }
            </>
        )
    }
};

export default PortfolioView;