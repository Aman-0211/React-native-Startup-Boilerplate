import Axios from 'axios';
import enviroments from '../../../environments';

export const signUp = ({fname, lname, email, password}) => {
  console.log('action', fname, lname, email, password);

  return Axios.post(
    `${enviroments.BASE_URL}/signup`,
    {
      name: fname,
      lastname: lname,
      email: email,
      password: password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
