import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";

import { login } from "../../actions/auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { login } = this.props;
        const { username, password } = this.state;
        login(username, password, () => {
            this.props.history.push("/adminhome");
        })
    }

    render() {
        return (
            <div>
                <Grid container spacing={10} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className="form-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Log In
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                >
                                                    Submit
                                               </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);