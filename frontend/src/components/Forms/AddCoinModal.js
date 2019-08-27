import React, { Component } from 'react';
import fetch from 'node-fetch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddCoinModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            portfolio_id: '',
            coinName: '',
            coinAmount: '',
            date: '',
            coinPrice: '',
            portfolio: props.portfolio
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCoinName = this.handleCoinName.bind(this);
        this.handleCoinAmount = this.handleCoinAmount.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleCoinPrice = this.handleCoinPrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleOpen() {
        this.setState({
            open: true,
            coinName: '',
            coinAmount: '',
            date: '',
            coinPrice: ''
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleCoinName(e) {
        e.preventDefault();
        this.setState({
            coinName: e.target.value
        })
    };

    handleCoinAmount(e) {
        e.preventDefault();
        this.setState({
            coinAmount: e.target.value
        })
    };

    handleDate(e) {
        e.preventDefault();
        this.setState({
            date: e.target.value
        })
    };
    handleCoinPrice(e) {
        e.preventDefault();
        this.setState({
            coinPrice: e.target.value
        })
    };

    async handleSubmit(e) {
        e.preventDefault();

        const store = sessionStorage;
        const userId = store.getItem('user');
        const portfolioName = store.getItem('tab');

        const url = `http://localhost:9000/portfolios/${userId}/coinAdd`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                coinName: this.state.coinName,
                coinAmount: this.state.coinAmount,
                date: this.state.date,
                coinPrice: this.state.coinPrice,
                portfolioName: portfolioName
            })
        });
    };

    render() {

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                    Add Coin
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={this.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Add Coin</DialogTitle>
                        <DialogContent>
                            <TextField

                                name="coinName"
                                label="Name of Coin"
                                type="text"
                                margin="dense"
                                fullWidth
                                onChange={this.handleCoinName}
                                value={this.state.coinName}
                            />
                            <TextField
                                name="coinAmount"
                                label="Number of Coins"
                                type="number"
                                margin="dense"
                                fullWidth
                                onChange={this.handleCoinAmount}
                                value={this.state.coinAmount}
                            />
                            <TextField
                                name="date"
                                label="Purchase Date"
                                type="text"
                                margin="dense"
                                fullWidth
                                onChange={this.handleDate}
                                value={this.state.date}
                            />
                            <TextField
                                name="coinPrice"
                                label="Price of 1 Coin"
                                type="number"
                                margin="dense"
                                fullWidth
                                onChange={this.handleCoinPrice}
                                value={this.state.coinPrice}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" value="Submit" onClick={this.handleClose} color="primary">
                                Add Coin
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default AddCoinModal;