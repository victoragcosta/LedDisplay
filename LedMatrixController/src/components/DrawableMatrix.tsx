import React, { useState } from 'react';
import {
  GestureResponderEvent, LayoutChangeEvent, StyleSheet, View, ViewStyle,
} from 'react-native';

type RgbPixel = number[];

type RgbLine = RgbPixel[];

type RgbMatrix = RgbLine[];

interface Props {
  matrix: RgbMatrix,
  style?: ViewStyle,
  onDraw?: (x:number, y:number, color:number[])=>void,
}

const DrawableMatrix = ({ matrix, style, onDraw }:Props):JSX.Element => {
  const [layout, setLayout] = useState({
    x: 0, y: 0, width: 0, height: 0,
  });
  const quantX = matrix[0].length;
  const quantY = matrix.length;
  const pixelWidth = `${100 / quantX}%`;

  const convertCoords = (x:number, y:number) => [
    Math.floor((quantX * x) / layout.width),
    Math.floor((quantY * y) / layout.height),
  ];

  const onTouch = (ev: GestureResponderEvent) => {
    const { locationX, locationY } = ev.nativeEvent;
    const [x, y] = convertCoords(locationX, locationY);

    // console.log(`Got (${locationX},${locationY}) => converted to (${x},${y})`);

    if (
      x >= 0 && x < quantX
      && y >= 0 && y < quantY
      && onDraw
    ) onDraw(x, y, [0, 0, 0]);
  };

  return (
    <View
      pointerEvents="box-only"
      onTouchMove={onTouch}
      onTouchStart={onTouch}
      onLayout={(event: LayoutChangeEvent) => {
        setLayout(event.nativeEvent.layout);
      }}
      style={{
        ...styles.matrixContainer,
        ...style,
      }}
    >
      {matrix.reduce(
        (a: RgbLine, b: RgbLine): RgbPixel[] => [...a, ...b],
      ).map(
        (pixel: RgbPixel, i: number) => (
          <View
          // eslint-disable-next-line react/no-array-index-key
            key={i}
            style={{
              width: pixelWidth,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1, aspectRatio: 1, backgroundColor: `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`,
              }}
            />
          </View>
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  matrixContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

DrawableMatrix.defaultProps = {
  style: undefined,
  onDraw: () => {},
};

export default DrawableMatrix;
