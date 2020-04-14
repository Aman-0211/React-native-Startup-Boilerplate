import React from 'react';
import {Appbar} from 'react-native-paper';

function HeaderView({navigation, scene}) {
  const _goBack = () => navigation.toggleDrawer();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_goBack} />
      <Appbar.Content
        title={scene.route.name}
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

export default HeaderView;
