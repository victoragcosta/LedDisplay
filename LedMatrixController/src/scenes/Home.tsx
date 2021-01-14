import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () : JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.text}>Testando</Text>
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

export default Home;
