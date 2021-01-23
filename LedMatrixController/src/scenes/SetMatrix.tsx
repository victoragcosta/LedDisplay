import React, { useState } from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorPicker from '../components/ColorPicker';
import DrawableMatrix from '../components/DrawableMatrix';
import StyleConstants from '../StyleConstants';

const SetMatrix = (): JSX.Element => {
  const initialMat = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 16; i++) {
    const line = [];
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 16; j++) {
      line.push([Math.random() * 255, Math.random() * 255, Math.random() * 255]);
    }
    initialMat.push(line);
  }

  const [matrix, setMatrix] = useState(initialMat);
  const [drawColor, setDrawColor] = useState([0, 0, 0]);

  const onDraw = (x: number, y: number, color: number[]) => {
    const mat = matrix.map((line) => line.map((col) => col.map((channel) => channel))); // Deep copy
    mat[y][x] = color;
    setMatrix(mat);
    // console.log('Changed matrix', x, y, color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Matriz estática em desenvolvimento</Text>
      <ColorPicker style={{ margin: StyleConstants.containerMargin }} color={drawColor} />
      <DrawableMatrix
        onDraw={(x, y) => onDraw(x, y, drawColor)}
        style={styles.matrix}
        matrix={matrix}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StyleConstants.containerMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matrix: {
    aspectRatio: 1,
  },
  text: {
    fontSize: StyleConstants.titleFontSize,
  },
});
export default SetMatrix;
