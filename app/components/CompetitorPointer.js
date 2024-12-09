import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../styles";
import Heading from "./Heading";
import Button from "./Button";

const CompetitorPointer = ({ theme, reversed }) => {
	const isReversed = reversed ? baseStyles.reversed : null;
	const themeStyles = baseStyles[theme];
	const colorStyles = baseStyles.colors[theme];

	return (
		<View style={[baseStyles.view, themeStyles, isReversed]}>
			<View style={baseStyles.card}>
				<View style={[baseStyles.padding, baseStyles.header]}>
					<View style={reversed && { alignItems: "flex-end" }}>
						<Heading bold styles={colorStyles}>Babken</Heading>
						<Heading bold styles={colorStyles}>Karapetyan</Heading>
					</View>
					<Button
						theme="danger"
						size="large"
						styles={[themeStyles, baseStyles.button]}
						textStyles={baseStyles.buttonText}
					>
						+
					</Button>
				</View>

				<View style={[baseStyles.padding, baseStyles.timeOut, baseStyles.topBordered[theme]]}>
					<TouchableOpacity>
						<Text style={colorStyles}>Time out</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={baseStyles.pointView}>
				<Heading bold size="large" styles={baseStyles.lightTextColor}>9</Heading>
			</View>
		</View>
	);
};

export default CompetitorPointer;

const baseStyles = StyleSheet.create({
	colors: {
		info: {
			color: Colors.infoColor,
		},
		danger: {
			color: Colors.dangerColor,
		},
	},
	padding: {
		padding: 16,
	},
	topBordered: {
		danger: {
			borderTopWidth: 2,
			borderTopColor: Colors.dangerColor,
		},
		info: {
			borderTopWidth: 2,
			borderTopColor: Colors.infoColor,
		},
	},
	view: {
		flexDirection: "row",
		padding: 5,
		borderRadius: 16,
		overflow: "hidden",
		flex: 1,
		width: "100%",
	},
	reversed: {
		flexDirection: "row-reverse",
	},
	card: {
		backgroundColor: Colors.lightBackgroundColor,
		borderRadius: 16,
		overflow: "hidden",
		flex: 1,
	},
	danger: {
		backgroundColor: Colors.dangerColor,
		borderColor: Colors.dangerColor,
	},
	info: {
		borderColor: Colors.infoColor,
		backgroundColor: Colors.infoColor,
	},
	header: {
		gap: 16,
	},
	pointView: {
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	timeOut: {
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 150,
		padding: 30,
	},
	buttonText: {
		fontWeight: "800",
		fontSize: 30,
	},
	lightTextColor: {
		color: Colors.lightTextColor,
	},
});
