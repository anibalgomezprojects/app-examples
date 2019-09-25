import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Home extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" className={classes.button}>
                    Default
            </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
            </Button>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Secondary
            </Button>
                <Button variant="contained" color="secondary" disabled className={classes.button}>
                    Disabled
            </Button>
                <Button variant="contained" href="#contained-buttons" className={classes.button}>
                    Link
            </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
