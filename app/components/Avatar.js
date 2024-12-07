import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '../styles';


const Avatar = ({ src }) => {
  return (
    <View style={baseStyles.view}>
      <Image
        style={baseStyles.img}
        source={src}
      />
    </View>
  );
};

export default Avatar;

const baseStyles = StyleSheet.create({
  view: {
    height: 64,
    width: 64,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Colors.primaryBackgroundColor
  },
  img: {
    height: '100%',
    width: 'auto'
  }
})