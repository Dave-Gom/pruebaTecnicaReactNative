import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  message: string;
  color?: string;
}

const TopBar = ({message, color = '#162c49'}: Props) => {
  return (
    <View style={[styles.bar, {backgroundColor: color}]}>
      <Text style={styles.msg}>{message}</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    color: 'white',
    padding: 15,
    display: 'flex',
    alignContent: 'flex-end',
  },
  msg: {
    textAlign: 'center',
    fontSize: 25,
  },
});
