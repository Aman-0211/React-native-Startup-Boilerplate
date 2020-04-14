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
  const [isDarkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    props.theme.dark = isDarkTheme;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.theme.dark
          ? props.theme.lightTheme.background
          : props.theme.darkTheme.background,
      }}>
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
                <Title
                  style={{
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  }}>
                  Aman Thakur
                </Title>
                <Caption
                  style={{
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  }}>
                  @Aman-0211
                </Caption>
              </View>
            </View>
          </View>
          <View style={[styles.row, {marginLeft: 20}]}>
            <View style={styles.section}>
              <Paragraph
                style={[
                  styles.paragraph,
                  styles.caption,
                  {
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  },
                ]}>
                80
              </Paragraph>
              <Caption
                style={[
                  styles.caption,
                  {
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  },
                ]}>
                Following
              </Caption>
            </View>
            <View style={styles.section}>
              <Paragraph
                style={[
                  styles.paragraph,
                  styles.caption,
                  {
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  },
                ]}>
                100
              </Paragraph>
              <Caption
                style={[
                  styles.caption,
                  {
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  },
                ]}>
                Follower
              </Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home"
                  type="font-awesome"
                  color={
                    props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text
                  }
                  size={size}
                />
              )}
              label="Home"
              labelStyle={{
                color: props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text,
              }}
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="user"
                  type="font-awesome"
                  color={
                    props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text
                  }
                  size={size}
                />
              )}
              label="Profile"
              labelStyle={{
                color: props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text,
              }}
              onPress={() => console.log('Profile')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="bookmark"
                  type="font-awesome"
                  color={
                    props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text
                  }
                  size={size}
                />
              )}
              label="Bookmark"
              labelStyle={{
                color: props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text,
              }}
              onPress={() => console.log('Bookmark')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="cogs"
                  type="font-awesome"
                  color={
                    props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text
                  }
                  size={size}
                />
              )}
              label="Settings"
              labelStyle={{
                color: props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text,
              }}
              onPress={() => props.navigation.navigate('Setting')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="question"
                  type="font-awesome"
                  color={
                    props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text
                  }
                  size={size}
                />
              )}
              label="Support"
              labelStyle={{
                color: props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text,
              }}
              onPress={() => console.log('Support')}
            />
          </Drawer.Section>
          <Drawer.Section style={[styles.drawerSection]}>
            <Caption
              style={[
                {
                  color: props.theme.dark
                    ? props.theme.lightTheme.text
                    : props.theme.darkTheme.text,
                  marginLeft: 18,
                  fontSize: 14,
                },
              ]}>
              Preference
            </Caption>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text
                  style={{
                    color: props.theme.dark
                      ? props.theme.lightTheme.text
                      : props.theme.darkTheme.text,
                  }}>
                  Dark Theme
                </Text>
                <View pointerEvents="none">
                  <Switch
                    value={isDarkTheme}
                    color={
                      !props.theme.dark
                        ? props.theme.lightTheme.text
                        : props.theme.darkTheme.text
                    }
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
          labelStyle={{
            color: props.theme.dark
              ? props.theme.lightTheme.text
              : props.theme.darkTheme.text,
          }}
          icon={({color, size}) => (
            <Icon
              name="exit-to-app"
              color={
                props.theme.dark
                  ? props.theme.lightTheme.text
                  : props.theme.darkTheme.text
              }
              size={size}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

export default withTheme(DrawerContent);
