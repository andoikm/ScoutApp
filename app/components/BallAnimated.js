import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const BallAnimated = () => {
	const translateX = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(0)).current;
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (containerSize.width && containerSize.height) {
			Animated.parallel([
				Animated.timing(translateX, {
					toValue: containerSize.width / 2 - 10,
					duration: 500,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
				Animated.timing(translateY, {
					toValue: containerSize.height - 20,
					duration: 500,
					easing: Easing.quad,
					useNativeDriver: true,
				}),
			]).start();
		}
	}, [containerSize, translateX, translateY]);

	return (
		<View
			style={baseStyles.viewBall}
			onLayout={(event) => {
				const { width, height } = event.nativeEvent.layout;
				setContainerSize({ width, height });
			}}
		>
			<Animated.View style={[baseStyles.ball, { transform: [{ translateX }, { translateY }] }]} />
		</View>
	);
};

export default BallAnimated;

const baseStyles = StyleSheet.create({
	viewBall: {
		height: '50%',
		marginTop: -50,
		width: '50%',
		borderWidth: 1,
		borderColor: "#ccc",
		justifyContent: "flex-start",
		alignItems: "center",
		overflow: "hidden",
		position: "relative",
	},
	ball: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: "#fec601",
		shadowColor: "#000",
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 6,
		position: "absolute",
		top: 0,
	},
});
