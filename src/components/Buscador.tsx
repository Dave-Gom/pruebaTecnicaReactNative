import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useMovies} from '../hooks/useMovies';
import {Pelicula} from '../interfaces/peliInterface';

interface props {
  actualizarPelicula: (valor: Pelicula) => void;
}

const Buscador = ({actualizarPelicula}: props) => {
  const [titulo, setTitulo] = useState<string>('The Lord Of The Rings');
  const [anio, setAnio] = useState<string>('2003');
  const [verificado, setVerificado] = useState<boolean>(true);
  const {peliculas, isLoading, getMovies, setIsLoading} = useMovies(
    titulo,
    anio,
  ); //hook personalizado para consultas a la api

  const verifica = async () => {
    if (titulo === '' || anio === '') {
      setVerificado(false);
    } else {
      setIsLoading(true);
      setVerificado(true);
      await getMovies();
      actualizarPelicula(peliculas);
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={styles.busqueda}>
        <View style={styles.input}>
          <TextInput
            style={styles.InText}
            defaultValue={titulo}
            placeholder="Titulo"
            onChangeText={(newText: string) => {
              setTitulo(newText);
            }}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.InText}
            placeholder="Año"
            defaultValue={anio}
            onChangeText={(newText: string) => setAnio(newText)}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => verifica()}>
          <View style={styles.buttonActionFloat}>
            <Text style={styles.fabText}>Buscar</Text>
          </View>
        </TouchableOpacity>
      </View>
      {!verificado ? (
        <View>
          <Text style={styles.InText}>Debe Cargar El titulo y el Año</Text>
        </View>
      ) : isLoading ? (
        <ActivityIndicator size="large" />
      ) : peliculas.Response === 'False' ? (
        <Text style={styles.InText}>
          Ocurrio un Error :( Por fovor vuelve a intentarlo
        </Text>
      ) : (
        <Text style={styles.InText}>Toca Para Ver Mas Detalles</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
    color: 'black',
    margin: 5,
  },
  busqueda: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    padding: 25,
  },
  buttonActionFloat: {
    backgroundColor: 'black',
    width: 130,
    padding: 10,
    marginTop: 5,
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  InText: {
    color: 'black',
    textAlign: 'center',
  },
  alertHide: {
    display: 'none',
    color: 'black',
  },
  alertShow: {
    display: 'none',
    color: 'black',
  },
});

export default Buscador;
