import { StyleSheet, View } from 'react-native';
import { Colors } from '../styles';

const Layout = ({ backgrounded, contentStyles={}, children }) => {
  return (
    <View style={[baseStyles.container]}>
      <View style={[baseStyles.content, contentStyles]}>
        {children}
      </View>
      {backgrounded && <View style={baseStyles.bottomHalf} />}
    </View>
  );
};

export default Layout;

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.lightTextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    zIndex: 1,
    maxWidth: 1300,
    maxHeight: 740,
    width: '100%',
  },
  bottomHalf: {
    position: 'absolute',
    backgroundColor: Colors.secondaryBackgroundColor,
    bottom: 0,
    left: 0,
    height: '50%',
    width: '100%',
    zIndex: 0,
  },
});
