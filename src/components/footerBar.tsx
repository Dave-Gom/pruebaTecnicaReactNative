import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  message: string;
  color?: string;
}

const FooterBar = ({message, color = '#162c49'}: Props) => {
  return (
    <View style={[styles.bar, {backgroundColor: color}]}>
      <Text style={styles.msg}>{message}</Text>
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  bar: {
    bottom: 0,
    width: '100%',
    height: 90,
    padding: 15,
    display: 'flex',
    alignContent: 'flex-end',
    backgroundColor: '#162c49',
  },
  msg: {
    textAlign: 'center',
    fontSize: 25,
  },
  imagen: {},
});
