import React, { useRef, useEffect, useState } from "react";
import {View, StyleSheet, Animated, Easing, TouchableOpacity} from "react-native";
import Button from "./Button";

const BallAnimated = () => {
	const translateX = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(0)).current;
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

	const rightAnimate = () => {
		if (containerSize.width && containerSize.height) {
			const bottom = containerSize.height - 20; // Bottom position
			const seventyPercent = containerSize.height * 0.3 - 20; // 70% from bottom
			const fiftyPercent = containerSize.height * 0.5 - 20; // 50% from bottom
			const quarterPercent = containerSize.height * 0.75 - 20; // 50% from bottom

			Animated.sequence([
				Animated.parallel([
					Animated.timing(translateX, {
						toValue: containerSize.width / 2 - 10,
						duration: 500,
						easing: Easing.linear,
						useNativeDriver: true,
					}),
					Animated.timing(translateY, {
						toValue: bottom,
						duration: 500,
						easing: Easing.quad,
						useNativeDriver: true,
					})
				]),

				// Move to bottom 70%
				Animated.timing(translateY, {
					toValue: seventyPercent,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Move to bottom 50%
				Animated.timing(translateY, {
					toValue: fiftyPercent,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Move to bottom 25%
				Animated.timing(translateY, {
					toValue: quarterPercent,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			]).start();
		}

	}

	const leftAnimate = () => {
		if (containerSize.width && containerSize.height) {
			const bottom = containerSize.height - 20; // Bottom position
			const seventyPercent = containerSize.height * 0.3 - 20; // 70% from bottom
			const fiftyPercent = containerSize.height * 0.5 - 20; // 50% from bottom
			const quarterPercent = containerSize.height * 0.75 - 20; // 50% from bottom

			Animated.sequence([
				Animated.parallel([
					Animated.timing(translateX, {
						toValue: -(containerSize.width / 2 - 10),
						duration: 500,
						easing: Easing.linear,
						useNativeDriver: true,
					}),
					Animated.timing(translateY, {
						toValue: bottom,
						duration: 500,
						easing: Easing.quad,
						useNativeDriver: true,
					})
				]),

				// Move to bottom 70%
				Animated.timing(translateY, {
					toValue: seventyPercent,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 400,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Move to bottom 50%
				Animated.timing(translateY, {
					toValue: fiftyPercent,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Move to bottom 25%
				Animated.timing(translateY, {
					toValue: quarterPercent,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),

				// Return to bottom (0)
				Animated.timing(translateY, {
					toValue: bottom,
					duration: 200,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			]).start();
		}

	}

	return (
		<View
			style={baseStyles.viewBall}
			onLayout={(event) => {
				const { width, height } = event.nativeEvent.layout;
				setContainerSize({ width, height });
			}}
		>
			<Animated.View style={[baseStyles.ball, { transform: [{ translateX }, { translateY }] }]} />
			<View style={baseStyles.controls}>
					<Button shape="circle" onPress={leftAnimate}>L</Button>
					<Button shape="circle" onPress={rightAnimate}>R</Button>
			</View>
		</View>
	);
};

export default BallAnimated;

const baseStyles = StyleSheet.create({
	viewBall: {
		height: "50%",
		marginTop: -50,
		width: "50%",
		justifyContent: "flex-start",
		alignItems: "center",
		position: "relative",
	},
	controls: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		gap: 10,
		bottom: '100%'
	},
	ball: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: "#fec601",
		// shadowColor: "#000",
		// shadowOffset: { width: 4, height: 4 },
		// shadowOpacity: 0.3,
		// shadowRadius: 4,
		// elevation: 6,
		position: "absolute",
		top: 0,
	},
});
