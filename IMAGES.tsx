import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { ImageComponent } from './components/ImageComponent';

const images = [
  'https://nannersbruh.com/wp-content/uploads/2021/12/RNI-Films-IMG-B8564AF5-B2BC-41A3-A9A1-1A8C94E8480A.jpg',
  'https://nannersbruh.com/wp-content/uploads/2022/01/000167900004-scaled.jpg',
  'https://nannersbruh.com/wp-content/uploads/2021/11/000266140011.jpg',
  'https://nannersbruh.com/wp-content/uploads/2022/01/img_5076-1_original.jpg',
];

export const IMAGES = ({ navigation }) => {
  const renderRainbowText = () => {
    const word = "Color";
    const colors = ['#990000', '#995c00', '#7a9900', '#009999', '#003d99', '#7a0099', '#99005c'];
    return word.split('').map((char, index) => (
      <Text key={index} style={{ color: colors[index % colors.length], fontWeight: 'bold' }}>
        {char}
      </Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <Text
        style={{ marginTop: 50, marginBottom: 20, textDecorationLine: 'underline'}}
        onPress={() => navigation.goBack()}
      >
        BACK HOME
      </Text>
      <View style={styles.innerContainer}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>IMAGES</Text> is a brief, yet pivotal body of work carried out from early 2019-2022.
          {'\n'}{'\n'}
          Beginning in traditional Black & White, & gently fading into the natural world of <Text style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{renderRainbowText()}</Text>, <Text style={{ fontWeight: 'bold' }}>IMAGES</Text> shows the journey of a young photographer & the traces of life he’s left behind in this 3 year period.
          {'\n'}{'\n'}
          It was intended as a momentary reflection & retrospective of the territory covered thus far, while also serving as motivation to continue full speed ahead into the infinite possibilities yet to be uncovered.
        </Text>
      </View>
      {images.map((imageUrl, index) => (
        <ImageComponent imageUrl={imageUrl} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  innerContainer: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default IMAGES;

