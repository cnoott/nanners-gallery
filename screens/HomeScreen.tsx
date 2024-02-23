import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textChangeRangeIsUnchanged } from 'typescript';

export const HomeScreen = ({navigation}) => {
  const rainbowText = "Up-To-Date".split('').map((char, index) => (
    <Text key={index} style={[styles.rainbowText, {color: getColor(index)}]}>
      {char}
    </Text>
  ));

  return (
    <View style={styles.container}>
      <Text
        style={styles.textDecoration}
        onPress={() => navigation.navigate('IMAGES')}
      >
      IMAGES</Text>
      <Text style={styles.textRow}>{rainbowText}</Text>
      <Text style={styles.plus}>+</Text>
      <Text
        style={{...styles.textDecoration, marginBottom: 0}}
        onPress={() => navigation?.navigate('About')}
      >
      about
      </Text>

      <Text onPress={() => navigation.navigate('Gallery')}>GALLERY</Text>
    </View>
  );
};

const getColor = (index) => {
  const colors = ['#990000', '#995c00', '#7a9900', '#009999', '#003d99', '#7a0099', '#99005c'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginBottom: 10,
  },
  textDecoration: {
    textDecorationLine: 'underline',
    fontSize: 18,
    marginBottom: 10,
  },
  rainbowText: {
    textDecorationLine: 'underline',
    fontSize: 18,
    marginBottom: 10,
  },
  plus: {
    marginBottom: 10,
  }
});

export default HomeScreen;
