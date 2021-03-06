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

import { fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
// import getNetworkStatus from '.utils/getNetworkStatus';
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
        const { location, weather, temperature } = await fetchWeather(
          city
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        })
      }
    });
  }

  render() {
    const { error, loading, location, temperature, weather } = this.state;

    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
        <StatusBar barStyle="light-content"/>
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.innerContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />
            
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle, styles.error]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                      {weather}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                  )}

                  <SearchInput 
                    placeholder="Search city" 
                    onSubmit={this.handleUpdateLocation}
                  />
                </View>
              )}
            </View>
         </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
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
  error: {
    fontWeight: '800',
    fontSize: 24,
  },
});
