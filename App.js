import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  KeyboardAvoidingView, 
  Platform, 
  Text,
  View,
  ActivityIndicator,
  StatusBar, 
} from 'react-native';

import { fetchLocationId, fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import { SearchInput } from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'San Fran',
      loading: false,
      error: false,
      temperature: 0,
      weather: '',
    }
  }

  componentDidMount() {
    this.handleUpdateLocation(this.state.location);
  }

  handleUpdateLocation = async city => {
    if (!city) return

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (error) {
        this.state({
          loading: false,
          error: true,
        })
      }
    });
  }

  render() {
    // const location = this.state

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
          <Text style={[styles.textStyle, styles.largeText]}> {this.state.location} </Text>
          <Text style={[styles.textStyle, styles.smallText]}> {this.state.weather} </Text>
          <Text style={[styles.textStyle, styles.smallText]}> {this.state.temperature} degrees</Text>
          <SearchInput 
            placeholder="Search city" 
            onSubmit={this.handleUpdateLocation}
            />
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
