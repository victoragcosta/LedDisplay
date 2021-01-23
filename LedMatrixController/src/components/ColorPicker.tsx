import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ViewStyle,
} from 'react-native';
import ColorWheel from './ColorWheel';

interface Props {
  color: number[],
  style?: ViewStyle
}

const ColorPicker = ({ color, style }: Props): JSX.Element => (
  <View style={style}>
    <View style={styles.wrapper}>
      <View style={styles.currentColorWrapper}>
        <Text>Selected</Text>
        <View
          style={{
            backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
            ...styles.currentColor,
          }}
        />
      </View>
      <ColorWheel />
    </View>
  </View>
);

ColorPicker.defaultProps = {
  style: undefined,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentColor: {
    height: 50,
    width: 50,
  },
  currentColorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorPicker;
