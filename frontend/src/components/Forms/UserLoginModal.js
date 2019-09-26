import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class UserLoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            email: '',
            password: ''
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
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

    async handleLoginSubmit(e) {
        e.preventDefault();

        const url = `http://localhost:9000/users/login`;

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

        const json_data = await response.json();

        if (response.status === 200) {
            const store = sessionStorage;
            store.setItem('user', `${json_data.user}`);

            const portfolios = json_data.portfolios.map((number) => {
                return number.toString()
            }).join(' ');
            store.setItem('portfolios', portfolios);

            this.forceUpdate();
        } else {
            console.log("Invalid Login");
        }
    }

    async handleLogoutSubmit(e) {
        e.preventDefault();

        const url = `http://localhost:9000/users/logout`;

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
            store.removeItem('portfolios');

            this.forceUpdate();
        } else {
            console.log("Invalid Credentials");
        }
    }

    render() {
        const store = sessionStorage;
        let isLoggedIn = false;
        if (store.getItem('user')) {
            isLoggedIn = true;
        } else {
            isLoggedIn = false;
        }

        return (
            <>
                {isLoggedIn ? (
                    <>
                        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                            Logout
                        </Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <form onSubmit={this.handleLogoutSubmit}>
                                <DialogTitle id="form-dialog-title">Logout</DialogTitle>
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
                                        Logout
                                    </Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                    </>
                ) : (
                        <>
                            <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                                Login
                            </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <form onSubmit={this.handleLoginSubmit}>
                                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
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
                                            Login
                                        </Button>
                                    </DialogActions>
                                </form>
                            </Dialog>
                        </>
                    )}
            </>
        );
    }
}

export default UserLoginModal;