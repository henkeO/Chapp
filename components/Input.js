import React, { Component } from 'react';
import { TextInput, View, Button, Alert } from 'react-native';

export default function InputField() {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="SEND"
        onPress={() => Alert.alert(value)}
      />
    </View>
  );
}

const styles = {
  container: {
    padding: 10,
    width: '100%',
    position: 'absolute',
    bottom: 5,
  },
  inputStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 40,
    borderRadius: 10,
    padding: 10,
  }
}
