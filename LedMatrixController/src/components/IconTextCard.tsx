import React from 'react';
import {
  NativeSyntheticEvent,
  Pressable, StyleSheet, Text, TextStyle, ViewStyle,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

type TouchEv = NativeSyntheticEvent<TouchEvent>;

interface Props {
  icon: string,
  title: string,
  style: ViewStyle,
  textStyle: TextStyle,
  onPress?: (ev:TouchEv)=>void
}

const IconTextCard = ({
  style, textStyle, icon, title, onPress,
}: Props): JSX.Element => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'grey',
      borderRadius: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    },
    cardText: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      ...textStyle,
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Ionicon name={icon} style={{ ...styles.cardText, fontSize: styles.cardText.fontSize * 3 }} />
      <Text style={styles.cardText}>
        {title}
      </Text>
    </Pressable>
  );
};

IconTextCard.defaultProps = {
  onPress: () => {},
};

export default IconTextCard;
