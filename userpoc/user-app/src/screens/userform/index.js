import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    TextareaAutosize
} from "@material-ui/core";

/* Actions */
import { addUser, checkSsn } from '../../actions/users';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName: "", telephoneNumber: "", fullAddress: '', ssn: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { addUser, checkSsn } = this.props;
        checkSsn(this.state.ssn, () => {
            addUser(this.state, (err) => {
                if (!err) {
                    this.setState({
                        firstName: "", lastName: "", telephoneNumber: "", fullAddress: '', ssn: ''
                    })
                }
            })
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
                                        Add User
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="First Name"
                                                    fullWidth
                                                    name="firstName"
                                                    variant="outlined"
                                                    value={this.state.firstName}
                                                    onChange={this.handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="Last Name"
                                                    fullWidth
                                                    name="lastName"
                                                    variant="outlined"
                                                    value={this.state.lastName}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="tel"
                                                    placeholder="Telephone Number"
                                                    fullWidth
                                                    name="telephoneNumber"
                                                    variant="outlined"
                                                    value={this.state.telephoneNumber}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextareaAutosize
                                                    rowsMin={5}
                                                    placeholder="Address"
                                                    variant="outlined"
                                                    name="fullAddress"
                                                    value={this.state.fullAddress}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="SSN"
                                                    fullWidth
                                                    name="ssn"
                                                    variant="outlined"
                                                    value={this.state.ssn}
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
        )
    }
}

const mapDispatchToProps = { addUser, checkSsn };

export default connect(null, mapDispatchToProps)(UserForm);