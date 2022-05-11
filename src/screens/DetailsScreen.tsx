import React, {useContext} from 'react';

import TopBar from '../components/TopBar';

import FAButton from '../components/FAButton';
import {useNavigation} from '@react-navigation/native';
import PeliculaContext from '../context/PeliculaContext';
import {ScrollView} from 'react-native-gesture-handler';
import CardMasDetallesPeliculas from '../components/CardMasDetallesPelicula';
import {View} from 'react-native';

const DetailsScreen = () => {
  const Navegation = useNavigation();
  const {peli} = useContext(PeliculaContext); //aunque en teoria hay una forma de pasar datos a traves de la navegacion como no manejo esa tecnica me veo forzado a usar context

  const backHome = () => {
    Navegation.navigate('HomeScreen');
  };

  return (
    <>
      <View>
        <TopBar message="Details" />
        <FAButton
          title="<<"
          onPress={backHome}
          xPosition="left"
          yPosition="top"
        />
        <ScrollView>
          <CardMasDetallesPeliculas data={peli} />
        </ScrollView>
      </View>
    </>
  );
};

export default DetailsScreen;
