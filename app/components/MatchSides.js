import { View, StyleSheet } from "react-native";
import UndoStep from "./UndoStep";
import CompetitorPointer from "./CompetitorPointer";
import Heading from "./Heading";

const MatchSides = () => (
	<View style={baseStyles.view}>
		<View style={[baseStyles.col, baseStyles.competitorCol]}>
			<CompetitorPointer theme="danger" />
		</View>
		<View style={[baseStyles.col, baseStyles.middleCol]}>
			<Heading theme="secondary">3TH SET</Heading>
			<UndoStep />

		</View>
		<View style={[baseStyles.col, baseStyles.competitorCol]}>
			<CompetitorPointer theme="info" reversed />
		</View>
	</View>
);

export default MatchSides;

const baseStyles = StyleSheet.create({
	view: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		justifyContent: "center",
		maxHeight: 250,
	},
	competitorCol: {
		flex: 1,
	},
	middleCol: {
		padding: 16,
		gap: 30,
	},
});
