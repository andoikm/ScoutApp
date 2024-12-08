import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useBallAnimation = (containerSize) => {
	const translateX = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(0)).current;

	const animate = (direction) => {
		if (containerSize.width && containerSize.height) {
			const bottom = containerSize.height - 20;
			const seventyPercent = containerSize.height * 0.3 - 20;
			const fiftyPercent = containerSize.height * 0.5 - 20;
			const quarterPercent = containerSize.height * 0.75 - 20;
			const toValueX = direction === "right" ? containerSize.width / 2 - 10 : -(containerSize.width / 2 - 10);

			Animated.sequence([
				Animated.parallel([
					Animated.timing(translateX, {
						toValue: toValueX,
						duration: 500,
						easing: Easing.linear,
						useNativeDriver: true,
					}),
					Animated.timing(translateY, {
						toValue: bottom,
						duration: 500,
						easing: Easing.quad,
						useNativeDriver: true,
					}),
				]),

				Animated.timing(translateY, {
					toValue: seventyPercent,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				Animated.timing(translateY, {
					toValue: bottom,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				Animated.timing(translateY, {
					toValue: fiftyPercent,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				Animated.timing(translateY, {
					toValue: bottom,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				Animated.timing(translateY, {
					toValue: quarterPercent,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				Animated.timing(translateY, {
					toValue: bottom,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			]).start();
		}
	};

	const rightAnimate = () => animate("right");
	const leftAnimate = () => animate("left");

	return { translateX, translateY, rightAnimate, leftAnimate };
};

export default useBallAnimation;
