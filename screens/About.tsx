import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

import Logo from '../assets/images/logo.png';
import { Text, View } from '../components/Themed';

// The reason for binary numbers are, we did it just for the laughs.
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo}></Image>
      <Text style={styles.title}>Skole Projekt</Text>
      <Text style={styles.title}>
        UI/UX - Mads L & Patrick F
        Programmering - Mads L & Patrick F
      </Text>

      <TouchableOpacity onPress={() => alert('Return to Menu.')} style={styles.button}>
        <Text style={styles.buttonText}>Back {page}</Text>
      </TouchableOpacity>
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
    fontSize: 0b11111,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: '5%',
    color: '#fff'
  },
  logo: {
    height: 0b10111110,
    width: 0b10111110,
    marginBottom: 18,
    marginTop: 18,
  },
  button: {
    backgroundColor: "#D6843C",
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 25,
    height: '12%',
    width: '80%'
  },
  buttons: {
    color: "#FFF",
    backgroundColor: '#34495E',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
