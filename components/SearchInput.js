import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export class SearchInput extends React.Component {
  render () {
    return (
      <View>
        <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor="white"
            style={styles.textInput}
            autoCorrect={false}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
          />
      </View>
    )}
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
