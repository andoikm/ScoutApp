import React, {useCallback, useState} from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
import Button from './Button';
import { Colors } from "../styles";
import useAnimatedSwiper from "../hooks/useAnimatedSwiper";
import AvatarWithName from "./AvatarWithName";
import TableCover from "./TableCover";
import BallAnimated from "./BallAnimated";

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
  const swiper = useAnimatedSwiper();
  const swiperTable = useAnimatedSwiper();

  const [swiped, setSwiped] = useState(false);

  const toggleSwipe = useCallback(() => {
    swiper.animate(swiped ? 0 : 1);
    swiperTable.animate(swiped ? 0 : 1);

    setSwiped(!swiped);
  }, [swiper, swiperTable]);

  return (
    <ImageBackground
      resizeMode="contain"
      style={baseStyle.tableBg}
      source={require('../../assets/images/table.png')}
      onLayout={e => swiper.setWidth(e.nativeEvent.layout.width - 200)}
    >
      <View style={baseStyle.container}>
        <Animated.View style={[baseStyle.col, baseStyle.avatarCol, { transform: [{ translateX: swiper.leftTranslate }] }]}>
          <AvatarWithName name={competitor.name} lastName={competitor.lastName} src={competitor.src} />
        </Animated.View>
        <View style={[baseStyle.col, baseStyle.tableCol]}>
          <TableCover
            swiped={swiped}
            setWidth={swiperTable.setWidth}
            leftTranslate={swiperTable.leftTranslate}
            rightTranslate={swiperTable.rightTranslate}
          />
          <View style={baseStyle.reverseContainer}>
            <BallAnimated />
            <View style={baseStyle.reverseButtonContainer}>
              <Button shape="circle" title="T" onPress={toggleSwipe} />
            </View>
          </View>
        </View>
        <Animated.View style={[baseStyle.col, baseStyle.avatarCol, { transform: [{ translateX: swiper.rightTranslate }] }]}>
          <AvatarWithName name={competitor2.name} lastName={competitor2.lastName} src={competitor2.src} />
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
  reverseContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  reverseButtonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: '20%',
  },
});
