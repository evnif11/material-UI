import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';

class IconTutorial extends Component {
  render() {
    return (
      <div style={{ margin: '30px' }}>
        <div>Material Icon - Home Icon </div>
        <div style={{ display: 'flex' }}>
          <HomeIcon color="primary" fontSize="large" />
          <AcUnitRoundedIcon color="primary" fontSize="large" />
          <AddShoppingCartRoundedIcon color="black" fontSize="large"/>
        </div>
      </div>
    );
  }
}

export default IconTutorial;
