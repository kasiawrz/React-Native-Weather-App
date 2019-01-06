import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, TextInput } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
         <Text style={[styles.blue, styles.largeText]}> Barcelona </Text>
         <Text style={styles.smallText}>Rain</Text>
         <Text style={styles.smallText}>26 degrees</Text>

         <TextInput
          style={[styles.textInput]}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue',
  },
  textStyle: {
    textAlign: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
