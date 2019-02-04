import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';

import getCities from './../utils/getCities';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      suggestedCity: false
    };
  }

  handleTextChange = text => {

    if (text.length > 3) {
      const suggestedCity = getCities(text)
      if (suggestedCity) {
        this.setState({ 
          suggestedCity 
        });
      }
    }
    else {
      this.setState({ suggestedCity: false });
    }

    this.setState({ text });
  }

  handleSumbit = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return

    onSubmit(text);
    this.setState({ text: ' '});

  }

  render () {
    const { placeholder } = this.props;
    const { text, suggestedCity } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="white"
          value={text}
          style={[styles.textInput, styles.position]}
          autoCorrect={false}
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSumbit}
        />
        {suggestedCity && (
          <Text style={[styles.suggestion, styles.position]}>
            {suggestedCity}
          </Text>
        )}
      </View>
    )}
  }

  SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  SearchInput.defaultProps = {
    placeholder: '',
  };

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      backgroundColor: 'rgb(96, 96, 96)',
      color: 'white',
      height: 40,
      marginTop: 20,
      marginHorizontal: 20,
    },
    suggestion: {
      height: 20,
      color: 'rgba(255, 255, 204, .6)',
      backgroundColor: 'rgba(96, 96, 96, .3)',
    },
    position: {
      width: 300,
      paddingHorizontal: 10,
    }
  });
