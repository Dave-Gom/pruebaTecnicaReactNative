import React, {createContext, useState} from 'react'; //en un principio no tenia pensado user context por que hay muy pocas rutas
import {Pelicula} from '../interfaces/peliInterface';

const PeliculaContext = createContext(); //creo el contexto

const PeliculaProvider = ({children}) => {
  //defino el provider
  const [peli, setPeli] = useState<Pelicula>({}); //uso el estado

  const handlePelicula = (pelicula: Pelicula) => {
    //defino el manejador del estado global
    setPeli(pelicula);
  };

  const data = {peli, handlePelicula}; //datos a retornar

  return (
    <PeliculaContext.Provider value={data}>{children}</PeliculaContext.Provider> //provider con el children prop
  );
};

export {PeliculaProvider};
export default PeliculaContext;
