import React, { Component } from 'react';
import fetch from 'node-fetch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeletePortfolioModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            portfolioName: '',
            userId: sessionStorage.getItem('user')
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen() {
        this.setState({
            open: true,
            portfolioName: ''
        });
    }

    handleClose() {

        this.setState({
            open: false
        });
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            portfolioName: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const url = `http://localhost:9000/portfolios/${this.state.userId}/delete`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.portfolioName,
                user: this.state.userId
            })
        });

        const json_data = await response.json();
        const id = json_data.portfolioId;

        const store = sessionStorage;
        const portfolios = store.portfolios.split(" ");

        const new_portfolios = portfolios.filter(item => {
            return item !== id.toString()
        });

        const portfolios_as_string = new_portfolios.join(' ');

        store.setItem('portfolios', portfolios_as_string);
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                    Delete Portfolio
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={this.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Delete Portfolio</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="name"
                                label="Porfolio Name"
                                type="text"
                                fullWidth
                                value={this.state.portfolioName}
                                onChange={this.handleChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" onClick={this.handleClose} color="primary">
                                Delete Portfolio
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default DeletePortfolioModal;