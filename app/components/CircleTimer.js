import React, { useRef, useCallback, useState } from "react";
import { View, StyleSheet, Animated, Easing, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Colors } from "../styles";
import Button from "./Button";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleTimer = ({ durationMs = 60000 }) => {
	const animation = useRef(new Animated.Value(0)).current;
	const radius = 90;
	const strokeWidth = 5;
	const circumference = 2 * Math.PI * radius;

	// State for showing the remaining time in milliseconds
	const [timeLeftMs, setTimeLeftMs] = useState(durationMs);

	// Helper function to format milliseconds in MM:SS
	function formatTime(ms) {
		const totalSeconds = Math.floor(ms / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}

	const start = useCallback(() => {
		setTimeLeftMs(durationMs);
		animation.setValue(0);

		const startTime = Date.now();
		const endTime = startTime + durationMs;

		const interval = setInterval(() => {
			const now = Date.now();
			const remainingMs = Math.max(endTime - now, 0);
			setTimeLeftMs(remainingMs);

			if (remainingMs <= 0) {
				clearInterval(interval);
			}
		}, 100);

		Animated.timing(animation, {
			toValue: 1,
			duration: durationMs,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start(() => {
			clearInterval(interval);
			animation.setValue(0);
			setTimeLeftMs(0);
		});
	}, [animation, durationMs]);

	const strokeDashoffset = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [circumference, 0],
	});

	return (
		<View style={styles.container}>
			<Svg height="200" width="200" style={styles.circle}>
				<Circle
					cx="100"
					cy='100'
					r={radius}
					stroke={timeLeftMs < durationMs/2 && timeLeftMs > 0? Colors.errorColor : Colors.infoColor}
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
			<Text style={styles.timerText}>{formatTime(timeLeftMs)}</Text>
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
	timerText: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
});
