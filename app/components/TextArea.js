import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Colors, defaultFont } from '../styles';

const TextArea = ({ placeholder, value, onChange, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        style={styles.textarea}
        placeholder={placeholder}
        onChangeText={onChange}
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  label: {
    ...defaultFont,
    fontSize: 12,
    marginBottom: 7,
    fontWeight: 400,
    color: Colors.primaryLightTextColor,
  },
  textarea: {
    ...defaultFont,
    flex: 1,
    color: Colors.primaryTextColor,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.inputBorderColor,
    backgroundColor: Colors.inputBackgroundColor,
    padding: 8,
    fontSize: 13,
    textAlignVertical: 'top',
    outlineStyle: 'none',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
});

export default TextArea;
