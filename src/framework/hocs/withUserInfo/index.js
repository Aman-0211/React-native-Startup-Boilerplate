import React, {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const UserInfoContext = createContext();

export const UserInfoProvider = props => {
  const [userInfo, setUserInfo] = useState(props.value || {});

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);

export function withUserInfo(Component) {
  return props => {
    const [user, setUser] = useContext(UserInfoContext);

    const setUserInfo = data => {
      return new Promise(async (resolve, reject) => {
        try {
          await AsyncStorage.setItem('userInfo', JSON.stringify(data));
          setUser(data);
          return resolve();
        } catch (error) {
          return reject(error);
        }
      });
    };

    return <Component {...props} userInfo={user} setUserInfo={setUserInfo} />;
  };
}
