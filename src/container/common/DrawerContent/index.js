import React, {useState} from 'react';
import {withTheme} from 'react-native-paper';
import {View} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

function DrawerContent(props) {
  console.log(props);

  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1, color: props.theme.colors.background}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://avatars1.githubusercontent.com/u/32020176?s=400&u=768adfbde2c460e34b064719844c4c773746ea42&v=4',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title>Aman Thakur</Title>
                <Caption>@Aman-0211</Caption>
              </View>
            </View>
          </View>
          <View style={[styles.row, {marginLeft: 20}]}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Follower</Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="user"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => console.log('Profile')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="bookmark"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmark"
              onPress={() => console.log('Bookmark')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="cogs"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => props.navigation.navigate('Setting')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="question"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              )}
              label="Support"
              onPress={() => console.log('Support')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preference">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch
                    value={isDarkTheme}
                    style={{color: props.theme.primary}}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

export default withTheme(DrawerContent);
