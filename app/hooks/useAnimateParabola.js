import {Animated, Easing} from "react-native";

const useAnimateParabola = (translateX, translateY, speed) => {
	return (toValueX, toValueY, isBack = false) => {
		return 	Animated.parallel([
			Animated.timing(translateX, {
				toValue: toValueX,
				duration: speed,
				easing: isBack ? Easing.quad : Easing.linear,
				useNativeDriver: true,
			}),
			Animated.timing(translateY, {
				toValue: toValueY,
				duration: speed,
				easing: isBack ? Easing.linear : Easing.quad,
				useNativeDriver: true,
			}),
		])
	};
}

export default useAnimateParabola;