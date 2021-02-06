import React, { useState } from 'react';
import {
  GestureResponderEvent, ImageBackground, StyleSheet, View,
} from 'react-native';

const ColorWheel = ():JSX.Element => {
  const [wheel, setWheel] = useState({
    x: 0,
    y: 0,
    height: styles.colorWheel.height,
    width: styles.colorWheel.width,
  });
  const [selectorPos, setSelectorPos] = useState({
    x: wheel.width / 2,
    y: wheel.height / 2,
  });

  let reference:View | null = null;

  const onLayout = () => {
    reference?.measure((x, y, width, height, pageX, pageY) => {
      const layout = {
        x: pageX,
        y: pageY,
        width,
        height,
      };
      setWheel(layout);
    });
  };

  const onTouch = (ev: GestureResponderEvent) => {
    const r = wheel.height / 2;
    const r2 = r * r;

    const { pageX, pageY } = ev.nativeEvent;
    let [x, y] = [pageX - wheel.x, pageY - wheel.y];
    const [centeredX, centeredY] = [x - r, y - r];
    const [x2, y2] = [centeredX * centeredX, centeredY * centeredY];

    if (x2 + y2 > r2) {
      const factor = r / Math.sqrt(x2 + y2);
      x = centeredX * factor + r;
      y = centeredY * factor + r;
    }
    setSelectorPos({ x, y });
  };

  return (
    <View
      onTouchStart={onTouch}
      onTouchMove={onTouch}
      onLayout={onLayout}
      ref={(component) => { reference = component; }}
      pointerEvents="box-only"
      nativeID="colorWheel"
      style={styles.colorWheel}
    >
      <ImageBackground style={styles.image} source={require("./colorwheel.png")}>
        <View
          style={{
            ...styles.colorWheelSelector,
            left: selectorPos.x,
            top: selectorPos.y,
          }}
        />
      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: 'blue',
  },
  colorWheel: {
    height: 100,
    width: 100,
    borderRadius: 99999,
    backgroundColor: 'red',
    flexDirection: "column",
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  colorWheelSelector: {
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#ccc',
    width: 10,
    height: 10,
    position: 'absolute',
    transform: [
      { translateX: -5 },
      { translateY: -5 },
    ],
  },
});

export default ColorWheel;
