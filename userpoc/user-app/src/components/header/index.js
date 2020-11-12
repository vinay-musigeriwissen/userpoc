import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },

    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        User App
                     </Typography>
                    <div className={classes.buttons}>
                        <Button variant="outlined" color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/userform">
                            Add User
                    </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

