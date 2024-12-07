import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, defaultFont } from '../styles';

const Segmented = ({ value: propsValue, segments, onSegmentChange }) => {
  const [value, setValue] = useState(propsValue);

  const handlePress = (item) => {
    setValue(item.value);
    onSegmentChange?.(item);
  };

  return (
    <View style={styles.container}>
      {segments.map(segment => (
        <TouchableOpacity
          key={segment.value}
          style={[
            styles.segment,
            segment.value === value && styles.selectedSegment,
          ]}
          onPress={() => handlePress(segment)}
        >
          <Text
            style={[
              styles.segmentText,
              segment.value === value && styles.selectedSegmentText,
            ]}
          >
            {segment.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Segmented;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.inputBackgroundColor,
    borderRadius: 6,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: Colors.inputBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSegment: {
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: Colors.lightTextColor,
  },
  segmentText: {
    ...defaultFont,
    color: Colors.secondaryTextColor,
    fontSize: 13,
  },
  selectedSegmentText: {
    color: Colors.primaryTextColor,
    fontWeight: 500,
  },
});