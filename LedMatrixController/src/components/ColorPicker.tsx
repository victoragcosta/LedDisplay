import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

interface Props {
  color: number[],
  style?: ViewStyle
}

const ColorPicker = ({ color, style }: Props): JSX.Element => (
  <View style={style}>
    <Text style={{ textAlign: 'center' }}>Current Color</Text>
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
      }}
    />
  </View>
);

ColorPicker.defaultProps = {
  style: undefined,
};

export default ColorPicker;
