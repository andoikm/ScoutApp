import {View, StyleSheet} from "react-native";
import CompetitorPointer from "./CompetitorPointer";

const MatchSides = ({ children }) => (
	<View style={baseStyles.view}>
		<View style={[baseStyles.col, baseStyles.competitorCol]}>
			<CompetitorPointer theme="danger" />
		</View>
		<View style={[baseStyles.col, baseStyles.middleCol]}>
			middle
		</View>
		<View style={[baseStyles.col, baseStyles.competitorCol]}>
			<CompetitorPointer theme="info" reversed />
		</View>
	</View>
);

export default MatchSides;

const baseStyles = StyleSheet.create({
	view: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		justifyContent: 'center'
	},
	competitorCol: {
		flex: 1
	},
	middleCol: {
		padding: 16
	}
})