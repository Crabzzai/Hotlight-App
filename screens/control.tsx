import * as React from 'react';
import { Image, StyleSheet, Slider, Dimensions } from 'react-native';

import Logo from '../assets/images/logo.png';
import { Text, View } from '../components/Themed';
const height = Dimensions.get('window').height;



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot-Light</Text>
      <Image style={styles.logo} source={Logo}></Image>

      <Text style={styles.sliderText}>Justere Varme</Text>
      <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#C14638"
          maximumTrackTintColor="#FFF"
          step={0.1}
          value={4}
          style={styles.slider}
          thumbTintColor="#D2584A"
        />

      <Text style={styles.sliderText}>Justere Lys</Text>
      <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#C14638"
          maximumTrackTintColor="#FFF"
          step={0.1}
          value={4}
          style={styles.slider}
          thumbTintColor="#D2584A"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0b1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34495E',
  },
  title: {
    fontSize: 0b111111,
    fontWeight: 'bold',
    color: '#fff'
  },
  logo: {
    height: 0b10111110,
    width: 0b10111110
  },
  slider: {
    paddingTop: 20,
    width: height * 0.4,
    height: 50,
    position: 'relative',
    display: 'flex',
  },
  sliderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
