import { StyleSheet, View } from 'react-native';
import Heading from './Heading';

const KeyValueSlot = ({ slots }) => {
  return (
    <View style={baseStyles.view}>
      {slots.map(({ key, value, valueProps = {}, keyProps = {} }) => (
        <View style={baseStyles.row} key={key}>
          <Heading size="small" {...keyProps} >
            {key}
          </Heading>
          <Heading bold {...valueProps} >
            {value}
          </Heading>
        </View>
      ))}
    </View>
  );
};

export default KeyValueSlot;

const baseStyles = StyleSheet.create({
  view: {
    gap: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

});
