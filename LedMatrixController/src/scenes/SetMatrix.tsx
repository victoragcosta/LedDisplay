import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

const SetMatrix = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.text}>Matriz estática em desenvolvimento</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
export default SetMatrix;
