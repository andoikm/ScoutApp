import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../styles";

const ScoreTag = ({ children }) => {
	return (
		<View style={styles.container}>
			<View style={styles.trapezoid}>
				<Text style={styles.scoreText}>{children}</Text>
			</View>
		</View>
	);
};

export default ScoreTag;

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	trapezoid: {
		backgroundColor: Colors.lightBackgroundColor,
		width: 200,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 6,
	},
	scoreText: {
		color: "#000",
		fontSize: 16,
		position: "absolute",
	},
});
