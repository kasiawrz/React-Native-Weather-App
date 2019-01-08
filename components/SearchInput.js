import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = text => {
    // this.props.location = newLocation;
    this.setState({ text });
    console.log(text)
  }

  handleSumbit = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return

    onSubmit(text);
    this.setState({ text: ' '});
    console.log('yoł')
  }

  render () {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="white"
            value={text}
            style={styles.textInput}
            autoCorrect={false}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            onChangeText={this.handleTextChange}
            onSubmitEditing={this.handleSumbit}
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
