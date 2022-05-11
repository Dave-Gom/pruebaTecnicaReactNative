import React from 'react';

// import all the components we are going to use
import {Text, View, StyleSheet, Image} from 'react-native';

//import Card
import {Card} from 'react-native-paper';
import {Pelicula} from '../interfaces/peliInterface';

interface props {
  data: Pelicula;
}

const CardMasDetallesPeliculas = ({data}: props) => {
  return (
    <View style={{margin: 15, marginTop: 130}}>
      <View style={styles.card}>
        <Card>
          <View style={styles.containerCol}>
            <Text style={[styles.title]}>{data.Title}</Text>
          </View>
          <View style={styles.containerRow}>
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
              <Text style={styles.text}>
                Votes: {data.imdbVotes} | Score: {data.imdbRating} |{' '}
                {data.Rated}
              </Text>
              <Text style={styles.text}>
                {data.Plot !== 'N/A'
                  ? data.Plot
                  : 'No Se encontro La descripcion :('}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.containerRow,
              {marginVertical: 0, paddingVertical: 1},
            ]}>
            <Text style={styles.text}>
              Director: {data.Director === 'N/A' ? 'Sin datos' : data.Director}
            </Text>
          </View>
          <View style={[styles.containerRow]}>
            <Text style={styles.text}>
              Actors: {data.Actors === 'N/A' ? 'Sin datos' : data.Actors}
            </Text>
          </View>
          <View style={[styles.containerRow]}>
            <Text style={[styles.text, {fontWeight: '600'}]}>
              Writer: {data.Writer === 'N/A' ? 'Sin datos' : data.Writer}
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default CardMasDetallesPeliculas;

const styles = StyleSheet.create({
  containerCol: {
    desplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerRow: {
    margin: 5,
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
    paddingHorizontal: 15,
  },
  cardBody: {
    color: 'black',

    padding: 10,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
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
