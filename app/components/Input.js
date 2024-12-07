import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors, defaultFont } from '../styles';

const Input = ({ label, icon, placeholder, value, onChangeText, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...defaultFont,
    fontSize: 12,
    marginBottom: 7,
    fontWeight: 400,
    color: Colors.primaryLightTextColor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.inputBorderColor,
    backgroundColor: Colors.inputBackgroundColor,
    paddingLeft: 8,
    paddingRight: 8,
    height: 40,
  },
  icon: {
    marginRight: 6,
    height: 16,
    color: Colors.primaryColor,
  },
  input: {
    ...defaultFont,
    flex: 1,
    color: Colors.primaryTextColor,
    height: '100%',
    lineHeight:  13,
    fontSize: 13,
    outlineStyle: 'none',
    outlineWidth: 0,
    outlineColor: 'transparent',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Colors.inputBackgroundColor,
  },
});

export default Input;
