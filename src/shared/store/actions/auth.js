import Axios from 'axios';
import enviroments from '../../../environments';

export const signIn = ({username, password}) => {
  console.log('action', username, password);

  return Axios.post(
    `${enviroments.BASE_URL}/signin`,
    {
      email: username,
      password: password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const signOut = () => {
  return Axios.post(`${enviroments.BASE_URL}/signout`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
