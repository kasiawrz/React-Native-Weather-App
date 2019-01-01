import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {

  render() {
    return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
