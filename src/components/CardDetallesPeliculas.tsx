import {useNavigation} from '@react-navigation/native';
import React from 'react';

// import all the components we are going to use
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//import Card
import {Card} from 'react-native-paper';
import {Pelicula} from '../interfaces/peliInterface';

interface props {
  data: Pelicula;
}

const CardDetallesPeliculas = ({data}: props) => {
  const Navegation = useNavigation();
  const onPress = () => {
    Navegation.navigate('DetailsScreen');
  };
  return (
    <TouchableOpacity onPress={onPress} style={{margin: 15}}>
      <View style={styles.card}>
        <Card>
          <View style={styles.container}>
            <View style={styles.left}>
              <Image
                source={{
                  uri:
                    data.Poster === 'N/A'
                      ? 'https://via.placeholder.com/700x100?text=No+image'
                      : data.Poster,
                }}
                style={[styles.imagen]}
              />
            </View>
            <View style={styles.right}>
              <Text style={styles.title}>{data.Title}</Text>
              <Text style={styles.text}>
                Votes: {data.imdbVotes} | Score: {data.imdbRating}
              </Text>
              <Text style={styles.text}>
                {data.Plot !== 'N/A'
                  ? data.Plot
                  : 'No Se encontro La descripcion :('}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default CardDetallesPeliculas;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 3,
    desplay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
  imagen: {
    width: 100,
    height: 150,
    borderRadius: 4,
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  cardBody: {
    color: 'black',

    padding: 10,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    marginBottom: 5,
  },
  left: {
    maxWidth: '40%',
    margin: 5,
  },
  right: {
    maxWidth: '60%',
    margin: 5,
  },
});
