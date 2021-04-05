import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '10px'
    }
};

class StyleTutorial extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Button className={classes.root}>Button with style</Button>
                <Button className={this.props.classes.root}>Button with Style</Button>
            </div>
        );
    }
}

export default withStyles(styles)(StyleTutorial);
