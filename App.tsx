import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavegationController} from './src/navegation/NavegationController';
import {PeliculaProvider} from './src/context/PeliculaContext';
const App = () => {
  return (
    <PeliculaProvider>
      <NavigationContainer>
        <NavegationController />
      </NavigationContainer>
    </PeliculaProvider>
  );
};

export default App;
