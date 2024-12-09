import React, { useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Button from "./Button";
import useBallAnimation from "../hooks/useBallAnimation";

const BallAnimated = () => {
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
	const { translateX, translateY, rightAnimate, leftAnimate, lastClicked } = useBallAnimation(containerSize);

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
				<Button theme="primaryOutline" shape="circle" onPress={leftAnimate} icon="chevron-left" disabled={lastClicked === 'left'} />
				<Button theme="primaryOutline" shape="circle" onPress={rightAnimate} icon="chevron-right" disabled={lastClicked === 'right'} />
			</View>
		</View>
	);
};

export default BallAnimated;

const baseStyles = StyleSheet.create({
	viewBall: {
		height: "50%",
		marginTop: -70,
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
		bottom: "100%",
	},
	ball: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: "#fec601",
		position: "absolute",
		top: 0,
	},
});
