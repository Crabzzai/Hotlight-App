import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

import Logo from '../assets/images/logo.png';
import { Text, View } from '../components/Themed';
import control from './control';

let page = 'Menu';

function pages() {
  if (page == "Menu") {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Logo}></Image>
        <Text style={styles.title}>Hot-Light</Text>
        <TouchableOpacity onPress={() => {page = "Control"}} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Open Omkring')} style={styles.button}>
          <Text style={styles.buttonText}>Omkring</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('I am just display!')} style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == "Control") {
    return control;
  } else {
    return null;
  }
}

// The reason for binary numbers are, we did it just for the laughs.
export default function TabOneScreen() {
  return (
    <View style={styles.container2}>
      {pages()}
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
  container2: {
    height: '100%',
  },
  title: {
    fontSize: 0b11111,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: '5%',
    color: '#fff',
    textShadowColor: "#AAAABB"
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
