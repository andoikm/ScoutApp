import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Colors, defaultFont } from '../styles';
import Icons from "./Icons";

const EmailInput = ({
  label,
  icon,
  placeholder,
  value,
  onChange,
  type,
  domain,
  onDomainChange,
}) => {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && <Icons icon={icon} style={styles.icon} />}
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChange}
          secureTextEntry={type === 'password'}
        />
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{}}
            selectedValue={domain}
            style={{
              inputIOS: styles.picker,
              inputAndroid: styles.picker,
              inputWeb: isWeb ? styles.webPicker : styles.picker,
              viewContainer: [styles.viewContainer, !isWeb && styles.viewContainerMob],
            }}
            onValueChange={onDomainChange}
            items={[
              { label: '@digitain.com', value: '@digitain.com' },
              { label: '@sportgenerate.com', value: '@sportgenerate.com' },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...defaultFont,
    fontSize: 12,
    marginBottom: 7,
    fontWeight: '400',
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
    height: 40,
  },
  icon: {
    marginRight: 6,
    fontSize: 16,
    color: Colors.primaryColor,
  },
  input: {
    ...defaultFont,
    flex: 1,
    color: Colors.primaryTextColor,
    height: '100%',
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Colors.inputBackgroundColor,
  },
  pickerContainer: {
    height: 38,
    overflow: 'hidden',
  },
  picker: {
    ...defaultFont,
    color: Colors.primaryTextColor,
    backgroundColor: Colors.inputBackgroundColor,
  },
  webPicker: {
    ...defaultFont,
    flex: 1,
    color: Colors.primaryTextColor,
    fontSize: 13,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  viewContainerMob: {
    width: 200,
  },
  viewContainer: {
    justifyContent: 'center',
    height: 38,
  },
});

export default EmailInput;
