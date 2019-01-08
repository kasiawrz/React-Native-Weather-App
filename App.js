import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  KeyboardAvoidingView, 
  Platform, 
  Text,
  View 
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import { SearchInput } from './components/SearchInput';

export default class App extends React.Component {

  render() {
    const location = 'Bardcelona';

    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
        <ImageBackground
          source={getImageForWeather('Snow')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
        <View style={styles.innerContainer}> 
          <Text style={[styles.textStyle, styles.largeText]}> {location} </Text>
          <Text style={[styles.textStyle, styles.smallText]}>Rain here</Text>
          <Text style={[styles.textStyle, styles.smallText]}>26 degrees</Text>
          <SearchInput placeholder="Search city" />
         </View>
         </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  image:{
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
