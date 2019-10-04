import React, { Component } from 'react';
import fetch from 'node-fetch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { flexbox } from '@material-ui/system';

class AddUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleOpen() {
        this.setState({
            open: true,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleFirstName(e) {
        e.preventDefault();
        this.setState({
            firstName: e.target.value
        })
    };

    handleLastName(e) {
        e.preventDefault();
        this.setState({
            lastName: e.target.value
        })
    };

    handleEmail(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    };

    handlePassword(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    };

    async handleSubmit(e) {
        e.preventDefault();

        const url = 'https://api.crypt-keeper.com/users/signup';

        await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        });
    }

    render() {
        return (
            <div >
                <Button variant="outlined" color="primary" onClick={ this.handleOpen }>
                    Sign Up
                </Button>
                <Dialog open={ this.state.open } aria-labelledby="form-dialog-title">
                    <form onSubmit={ this.handleSubmit }>
                        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                name="firstName"
                                label="First Name"
                                type="text"
                                margin="dense"
                                fullWidth
                                onChange={ this.handleFirstName }
                                value={ this.state.firstName }
                            />
                            <TextField
                                name="lastName"
                                label="Last Name"
                                type="text"
                                margin="dense"
                                fullWidth
                                onChange={ this.handleLastName }
                                value={ this.state.lastName }
                            />
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                margin="dense"
                                fullWidth
                                onChange={ this.handleEmail }
                                value={ this.state.email }
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                margin="dense"
                                fullWidth
                                onChange={ this.handlePassword }
                                value={ this.state.password }
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" value="Submit" onClick={ this.handleClose } color="primary">
                                Sign Up
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default AddUserModal;