import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';


const styles = (theme) => {
    return {
        root: {
            background: theme.background,
            border: 0,
            borderRadius: 3,
            boxShadow: theme.boxShadow,
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin : '10px'
        }
    }
};

class StyleTutorial2Inner extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Button className={classes.root}>Button with styles_02</Button>
                <Button className={classes.root}>Button with styles_03</Button>
            </div>
        );
    }
}

export default withStyles(styles)(StyleTutorial2Inner);
