const environments = {
  development: {
    BASE_URL: 'http://127.0.0.1:5000/api',
  },
  qa: {
    BASE_URL: '',
  },
  production: {
    BASE_URL: '',
  },
};
export default environments[process.env.REACT_APP_ENV] ||
  environments[Object.keys(environments)[0]];
