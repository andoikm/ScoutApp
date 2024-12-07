import { StyleSheet, View } from 'react-native';
import { Colors } from '../styles';


const FlexRow = ({children}) => {
  return (
    <View style={baseStyles.view}>
      {children}
    </View>
  );
};

export default FlexRow;

const baseStyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    borderColor: Colors.primaryBackgroundColor,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  }
});