import React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';

export const About = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Text
        style={{ marginTop: 50, marginBottom: 20, textDecorationLine: 'underline'}}
        onPress={() => navigation.goBack()}
      >
        BACK HOME
      </Text>
      <Text style={{fontWeight: 'bold'}}>About</Text>
      <Text style={{fontWeight: 'bold'}}>- - - - -</Text>
      <Text style={styles.paragraph}>
       
        Born in Houston, Texas (U.S.A.) Noe Esquivel is an Artist, Photographer & Free-Thinker. Since a child, Noe has always had an affinity for Photography. When he received his first camera (2016), gifted to him by family members,  he was instantly mesmerized & has been a student to photography ever since.  It was in a photojournalism High School class where Esquivel first encountered the name “Henri Cartier-Bresson” and his famous quote “Your first 10,000 photographs are your worst.” From this quote, a wealth of Inspiration washed over Esquivel, inevitably leading him down the path of Artistry & Self-Discovery. Noe has built a small, yet fiercely dedicated online following, and still continues to Photograph (While also experimenting in fields such as Design, Music & Screenwriting) to this day. 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    padding: 20,
  },
  paragraph: {
    lineHeight: 20,
  },
});

export default About;
