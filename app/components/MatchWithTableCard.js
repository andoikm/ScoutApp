import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import Avatar from './Avatar';
import Heading from './Heading';
import Button from './Button';
import { useState } from 'react';


const competitor = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV5wPaYnMS7lH4seBEEa79eeFE5M1CpqAmA&s',
  theme: 'info',
  description: 'BLUE',
  name: 'Sahak',
  lastName: 'Karapetyan'
}

const competitor2 = {
  src: 'https://e7.pngegg.com/pngimages/530/543/png-clipart-computer-icons-x-mark-check-mark-symbol-miscellaneous-sign-thumbnail.png',
  theme: 'info',
  description: 'BLUE',
  name: 'Babken',
  lastName: 'Harutyunyan'
}

const MatchWithTableCard = () => {
  const [swiped, setSwiped] = useState(false);
  return (
    <ImageBackground
      source={require('../../assets/images/table.png')}
      resizeMode="contain"
      style={baseStyle.tableBg}
    >
      <View style={[baseStyle.container, swiped && baseStyle.swiped]}>
        <View style={[baseStyle.col, baseStyle.avatarCol]}>
          <Avatar src={competitor.src} />
          <Heading styles={baseStyle.heading} bold size="medium">{competitor.name}</Heading>
          <Heading styles={baseStyle.heading} bold size="medium">{competitor.lastName}</Heading>
        </View>
        <View style={[baseStyle.col, baseStyle.tableCol]}>
           <View style={baseStyle.reverseContainer}>
             <View style={baseStyle.reverseButtonContainer}>
               <Button shape="circle" title="T" onPress={() => setSwiped(!swiped)} />
             </View>
           </View>
            <View style={baseStyle.reverseContainer} />
        </View>
        <View style={[baseStyle.col, baseStyle.avatarCol]}>
          <Avatar src={competitor2.src} />
          <Heading styles={baseStyle.heading} bold size="medium">{competitor2.name}</Heading>
          <Heading styles={baseStyle.heading} bold size="medium">{competitor2.lastName}</Heading>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MatchWithTableCard;

const baseStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  swiped: {
    flexDirection: 'row-reverse',
  },
  tableCol: {
    flex: 1,
  },
  tableBg: {
    width: '100%',
    height: '100%'
  },
  avatarCol: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reverseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  reverseButtonContainer: {
      alignSelf: 'center',
    justifyContent: 'center'
  }

})