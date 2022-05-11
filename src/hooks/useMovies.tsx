import axios from 'axios';
import {useEffect, useState} from 'react';
import {Pelicula} from '../interfaces/peliInterface';

export const useMovies = (titulo: string, year: string) => {
  const [peliculas, setPeliculas] = useState<Pelicula>({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=6c5e819&t=${titulo}&y=${year}`,
    );
    setPeliculas(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {peliculas, isLoading, getMovies, setIsLoading};
};
