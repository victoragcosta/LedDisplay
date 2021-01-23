import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyleConstants from '../StyleConstants';

interface Props {
  children: {
    [index: number]: JSX.Element
  }
}

const CenteredButtonsScreen = ({ children }: Props): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.wrapper}>
        {children}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    padding: StyleConstants.containerMargin,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CenteredButtonsScreen;
