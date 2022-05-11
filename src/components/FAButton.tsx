import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface FAButtonProps {
  title: string;
  onPress: () => void;
  yPosition?: 'bottom' | 'top';
  xPosition?: 'right' | 'left'; //el signo de interrogacion indica que la propiedad es opcional
}

const FAButton = ({
  title,
  onPress,
  xPosition = 'right',
  yPosition = 'bottom',
}: FAButtonProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.location,
          xPosition === 'right' ? styles.right : styles.left,
          yPosition === 'bottom' ? styles.bottom : styles.top,
        ]}>
        <View>
          <View style={styles.buttonActionFloat}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.location,
          xPosition === 'right' ? styles.right : styles.left,
          yPosition === 'bottom' ? styles.bottom : styles.top,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#ffffff30', true, 30)}>
          <View style={styles.buttonActionFloat}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  buttonActionFloat: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  },

  location: {
    position: 'absolute',
  },
  top: {
    top: 2,
    zIndex: 100,
  },
  bottom: {
    bottom: 25,
  },
  left: {
    left: 16,
  },
  right: {
    right: 35,
  },
});

export default FAButton;
