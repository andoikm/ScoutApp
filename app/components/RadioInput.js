import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, defaultFont } from '../styles';

const RadioInput = ({ options, value, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity key={option.id} style={styles.radioContainer} onPress={() => onChange(option.id)}>
          <View
            style={[
              styles.radioCircle,
              value === option.id && styles.radioSelected,
            ]}
          >
            {value === option.id && <View style={styles.radioSelectedBg} />}
          </View>
          <View style={styles.labelView}>
            <Text style={styles.label}>{option.label}1</Text>
            {option.label2 && <Text style={styles.label}>{option.label2}</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  radioContainer: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.inputBorderColor,
    backgroundColor: Colors.inputBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: Colors.primaryColor,
  },
  radioSelectedBg: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  labelView: {
    flexDirection: 'column',
  },
  label: {
    ...defaultFont,
    fontSize: 14,
    color: Colors.primaryLightTextColor,
  },
});

export default RadioInput;
