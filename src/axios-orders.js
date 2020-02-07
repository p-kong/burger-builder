import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://build-a-burger-2020.firebaseio.com/',
});

export default instance;
