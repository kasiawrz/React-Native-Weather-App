import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';

import { SearchInput } from './components/SearchInput';

export default class App extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
         <Text style={[styles.blue, styles.largeText]}> Barcelona </Text>
         <Text style={styles.smallText}>Rain here</Text>
         <Text style={styles.smallText}>26 degrees</Text>
         <SearchInput placeholder="Search city" />
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
});
