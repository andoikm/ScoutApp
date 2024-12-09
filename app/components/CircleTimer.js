import React, { useRef, useCallback } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Colors } from "../styles";
import Button from "./Button";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleTimer = () => {
	const animation = useRef(new Animated.Value(0)).current;
	const radius = 90;
	const strokeWidth = 5;
	const circumference = 2 * Math.PI * radius;

	const start = useCallback(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 4000,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start(() => {
			animation.setValue(0);
		});
	}, [animation]);

	const strokeDashoffset = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [circumference, 0],
	});


	return (
		<View style={styles.container}>
			<Svg height="200" width="200" style={styles.circle}>
				<Circle
					cx="100"
					cy="100"
					r={radius}
					stroke={Colors.primaryTextColor}
					strokeWidth={strokeWidth}
					fill="none"
				/>
				<AnimatedCircle
					cx="100"
					cy="100"
					r={radius}
					stroke={Colors.secondaryBackgroundColor}
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					transform={`rotate(-90, 100, 100)`}
				/>
			</Svg>
			<Button icon="play" onPress={start} title="Start" />
		</View>
	);
};

export default CircleTimer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		position: "relative",
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	circle: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
	},
});
