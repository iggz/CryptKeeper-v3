import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            email: '',
            password: '',
            deleted: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen() {
        this.setState({
            open: true,
            email: '',
            password: ''
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    };

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    };

    async handleSubmit(e) {
        e.preventDefault();

        const url = `http://localhost:9000/users/delete`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        });

        if (response.status === 200) {
            const store = sessionStorage;
            store.removeItem('user');
            console.log("store:", store);
            this.setState({
                deleted: true
            });
        } else {
            console.log("Credentials Do Not Match User");
        }
    }

    render() {
        const isDeleted = this.state.deleted;

        return (
            <div>
                {isDeleted ? (
                    <Redirect to="/" />
                ) : (
                        <>
                            <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                                Delete User
                            </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <form onSubmit={this.handleSubmit}>
                                    <DialogTitle id="form-dialog-title">Delete User</DialogTitle>
                                    <DialogContent>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            type="email"
                                            margin="dense"
                                            fullWidth
                                            placeholder="Satoshi@Nakamoto.com"
                                            onChange={this.handleEmail}
                                            value={this.state.email}
                                            required
                                        />
                                        <TextField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            margin="dense"
                                            fullWidth
                                            placeholder="Bitcoin"
                                            onChange={this.handlePassword}
                                            value={this.state.password}
                                            required
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type="submit" value="Submit" onClick={this.handleClose} color="primary">
                                            Delete User
                                        </Button>
                                    </DialogActions>
                                </form>
                            </Dialog>
                        </>
                    )}
            </div>
        );
    }
}

export default DeleteUserModal;