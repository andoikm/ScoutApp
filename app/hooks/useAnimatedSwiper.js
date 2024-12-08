import {useCallback, useRef, useState} from "react";
import {Animated, Easing} from "react-native";

const useAnimatedSwiper = (duration = 300) => {
	const [width, setWidth] = useState(0);

	const translateAnim = useRef(new Animated.Value(0)).current;

	const animate = useCallback(toValue => {
		Animated.timing(translateAnim, {
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.inOut(Easing.ease),
		}).start();
	}, []);

	const playerTranslate = translateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, width],
	});

	return {
		animate,
		setWidth,
		leftTranslate: playerTranslate,
		rightTranslate: Animated.multiply(playerTranslate, -1),
	};
};

export default useAnimatedSwiper;