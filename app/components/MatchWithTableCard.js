import React, { useState, useRef } from 'react';
import { Animated, Easing, ImageBackground, StyleSheet, View, Dimensions } from 'react-native';
import Avatar from './Avatar';
import Heading from './Heading';
import Button from './Button';
import { Colors } from "../styles";

const competitor = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV5wPaYnMS7lH4seBEEa79eeFE5M1CpqAmA&s',
  theme: 'info',
  description: 'BLUE',
  name: 'Sahak',
  lastName: 'Karapetyan',
};

const competitor2 = {
  src: 'https://e7.pngegg.com/pngimages/530/543/png-clipart-computer-icons-x-mark-check-mark-symbol-miscellaneous-sign-thumbnail.png',
  theme: 'info',
  description: 'BLUE',
  name: 'Babken',
  lastName: 'Harutyunyan',
};

const MatchWithTableCard = () => {
  const [swiped, setSwiped] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [tblContainerWidth, setTblContainerWidth] = useState(0);
  const translateAnim = useRef(new Animated.Value(0)).current;
  const translateAnimTable = useRef(new Animated.Value(0)).current;

  const toggleSwipe = () => {
    Animated.timing(translateAnim, {
      toValue: swiped ? 0 : 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    Animated.timing(translateAnimTable, {
      toValue: swiped ? 0 : 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    setSwiped(!swiped);
  };

  const playerTranslate = translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth - 200],
  });

  const playerTranslateTable = translateAnimTable.interpolate({
    inputRange: [0, 1],
    outputRange: [0, tblContainerWidth / 2 - 5],
  });

  const screenWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../assets/images/table.png')}
      resizeMode="contain"
      style={baseStyle.tableBg}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <View style={baseStyle.container}>
        <Animated.View style={[baseStyle.col, baseStyle.avatarCol, { transform: [{ translateX: playerTranslate }] }]}>
          <Avatar src={competitor.src} />
          <Heading styles={baseStyle.heading} bold size="medium">
            {competitor.name}
          </Heading>
          <Heading styles={baseStyle.heading} bold size="medium">
            {competitor.lastName}
          </Heading>
        </Animated.View>

        <View style={[baseStyle.col, baseStyle.tableCol]}>
          <View style={baseStyle.tableColorsBg} onLayout={(e) => setTblContainerWidth(e.nativeEvent.layout.width)}>
            <Animated.View style={[baseStyle.red, { transform: [{ translateX: playerTranslateTable }] }]} />
            <Animated.View style={[baseStyle.blue, { transform: [{ translateX: Animated.multiply(playerTranslateTable, -1) }] }]} />
          </View>

          <View style={baseStyle.reverseContainer}>
            <View style={baseStyle.reverseButtonContainer}>
              <Button shape="circle" title="T" onPress={toggleSwipe} />
            </View>
          </View>
        </View>

        <Animated.View style={[baseStyle.col, baseStyle.avatarCol, { transform: [{ translateX: Animated.multiply(playerTranslate, -1) }] }]}>
          <Avatar src={competitor2.src} />
          <Heading styles={baseStyle.heading} bold size="medium">
            {competitor2.name}
          </Heading>
          <Heading styles={baseStyle.heading} bold size="medium">
            {competitor2.lastName}
          </Heading>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default MatchWithTableCard;
const baseStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  tableCol: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableColorsBg: {
    position: 'absolute',
    height: '61%',
    width: '53%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    flexDirection: 'row',
    top: 0,
  },
  red: {
    flex: 1,
    backgroundColor: Colors.dangerColor,
    marginRight: 2,
    height: '100%',
  },
  blue: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.infoColor,
  },
  tableBg: {
    width: '100%',
    height: '100%',
  },
  avatarCol: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reverseContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  reverseButtonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: '20%',
  },
});

