import React from 'react';
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
  return (
    <View style={{flex: 1}}>
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

export default DrawerContent;