import React, {useContext, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../components/TopBar';

import Buscador from '../components/Buscador';
import {Pelicula} from '../interfaces/peliInterface';
import CardDetallesPeliculas from '../components/CardDetallesPeliculas';
import PeliculaContext from '../context/PeliculaContext';
import FooterBar from '../components/footerBar';

const HomeScreen = () => {
  const [pelicula, setPelicula] = useState<Pelicula>({}); //aunque esto tambien se puede manejar por contexto, no se aconseja usar el contexto para operaciones entre componentes padre e hijo
  const {peli, handlePelicula} = useContext(PeliculaContext);

  const actualizarPelicula = async (valor: Pelicula) => {
    setPelicula(valor);
    handlePelicula(valor);
  };

  return (
    <>
      <View>
        <TopBar message="Home" />
        <Buscador actualizarPelicula={actualizarPelicula} />
        {pelicula.hasOwnProperty('Title') ? (
          <CardDetallesPeliculas data={pelicula} />
        ) : (
          <Text style={styles.text}>Busca tu Pelicula favorita</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;
