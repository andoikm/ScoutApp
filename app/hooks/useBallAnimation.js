import {useRef, useState} from "react";
import { Animated } from "react-native";
import useAnimateParabola from "./useAnimateParabola";
import useAnimateTopToBottom from "./useAnimateTopToBottom";

const useBallAnimation = (containerSize) => {
	const [lastClicked, setLastClicked] = useState(null);
	const translateX = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(0)).current;
	const getAnimateParabola = useAnimateParabola(translateX, translateY, 500);

	const getAnimateTopToBottom = useAnimateTopToBottom(translateY);

	const animate = direction => {
		const bottom = containerSize.height - 20;
		const toValueX =  direction * (containerSize.width / 2 - 10);
		const animates = []

		const x = translateX["_value"];
		if (x === 0) {
			animates.push(getAnimateParabola(toValueX, bottom, false));
		} else {
			animates.push(getAnimateParabola(0, 0, true));
			animates.push(getAnimateParabola(toValueX, bottom, false));
		}

		animates.push(...getAnimateTopToBottom(bottom, 300, 3));
		Animated.sequence(animates).start();
	};

	const rightAnimate = () => {
		setLastClicked('right');
		animate(1);
	}
	const leftAnimate = () => {
		setLastClicked('left');
		animate(-1);
	}

	return { translateX, translateY, lastClicked, rightAnimate, leftAnimate };
};

export default useBallAnimation;
