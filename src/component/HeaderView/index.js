import React from 'react';
import {Header, Icon} from 'react-native-elements';

function HeaderView(props) {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => props.navigation.toggleDrawer(),
      }}
      centerComponent={{text: props.scene.route.name, style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
}

export default HeaderView;
