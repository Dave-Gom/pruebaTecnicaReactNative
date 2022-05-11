import axios from 'axios';

const pelisDb = axios.create({
  baseURL: 'https://www.omdbapi.com/?i=t3896198&apikey=6c5e819',
});

export default pelisDb;
