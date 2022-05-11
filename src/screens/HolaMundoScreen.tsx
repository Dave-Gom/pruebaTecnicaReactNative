import React from 'react';
import {Text, View} from 'react-native';
import Contador from '../components/Contador';

const HolaMundoScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'grey', justifyContent: 'center'}}>
      <Text style={{fontSize: 50, textAlign: 'center', color: 'black'}}>
        Hola Mundo
      </Text>
      <Contador />
    </View>
  );
};

export default HolaMundoScreen;
