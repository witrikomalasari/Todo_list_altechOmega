import axios from 'axios';

export const AltechAPIs = axios.create({
  baseURL: 'https://dummyjson.com/todos/',
});
