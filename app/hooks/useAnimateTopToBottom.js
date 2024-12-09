import {Animated, Easing} from "react-native";

const useAnimateTopToBottom = (translateY) => {
	return (bottom, initialSpeed, animateCount) => {
		const animations = [];

		for (let i = animateCount; i > -1; i--) {
			const heightFactor = 1 - (i + 1) / (animateCount + 1);

			animations.push(
				Animated.timing(translateY, {
					toValue: bottom * heightFactor,
					duration: initialSpeed * (i * 0.3),
					easing: Easing.linear,
					useNativeDriver: true,
				}),
				Animated.timing(translateY, {
					toValue: bottom,
					duration: initialSpeed * (i * 0.3),
					easing: Easing.linear,
					useNativeDriver: true,
				})
			);
		}

		return animations;
	};
};

export default useAnimateTopToBottom;