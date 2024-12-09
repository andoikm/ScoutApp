import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles";

const ScoreTag = ({ children }) => {
	return (
		<View style={styles.container}>
			<View style={styles.trapezoid}>
				<View style={styles.scoreTextContainer}>{children}</View>
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
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 50,
		paddingLeft: 50,
		backgroundColor: Colors.lightBackgroundColor,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 6,
	},
	scoreTextContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});
