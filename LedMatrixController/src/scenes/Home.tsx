import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import CenteredButtonsScreen from '../components/CenteredButtonsScreen';
import IconTextCard from '../components/IconTextCard';
import StyleConstants from '../StyleConstants';

const Home = (): JSX.Element => {
  const navigation = useNavigation();

  const navigateSetMatrix = () => navigation.navigate('SetMatrix');
  const navigateSetAnimatedMatrix = () => navigation.navigate('SetAnimatedMatrix');
  const navigateSetSlidingMatrix = () => navigation.navigate('SetSlidingMatrix');

  return (
    <CenteredButtonsScreen>
      <IconTextCard onPress={navigateSetMatrix} textStyle={styles.cardText} style={styles.card} icon="image-outline" title="Set Matrix" />
      <IconTextCard onPress={navigateSetAnimatedMatrix} textStyle={styles.cardText} style={styles.card} icon="film-outline" title="Set Animated Matrix" />
      <IconTextCard onPress={navigateSetSlidingMatrix} textStyle={styles.cardText} style={styles.card} icon="text-outline" title="Set Sliding Matrix" />
    </CenteredButtonsScreen>
  );
};

const fontSize = 20;
const styles = StyleSheet.create({
  card: {
    width: fontSize * 5,
    minHeight: fontSize * 7,
    flexGrow: 1,
    margin: fontSize / 4,
    backgroundColor: StyleConstants.primaryColor,
  },
  cardText: {
    fontSize: fontSize * 0.9,
  },
});

export default Home;
