import { View, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { Colors } from "../styles";
import Heading from "../components/Heading";
import ScoreTag from "../components/ScoreTag";
import MatchSides from "../components/MatchSides";
import Button from "../components/Button";

const LiveMatch = () => {
	return (
		<Layout contentStyles={styles.layout}>
			<View style={styles.view}>
				<View style={styles.container}>
					<View style={styles.row}>
						<ScoreTag>
							<Heading>Total Score</Heading>
							<Heading bold>1 : 1</Heading>
						</ScoreTag>
					</View>
					<View style={styles.row}>
						<MatchSides />
					</View>
					<View style={styles.row}>3</View>
				</View>
				<View style={styles.footer}>
					<Button title="TIME OUT" styles={styles.footerButtons} onPress={() => {}} />
					<Button title="VIEW STREAM" styles={styles.footerButtons} onPress={() => {}} />
					<Button title="CANCEL MATCH" styles={styles.footerButtons} onPress={() => {}} theme="dangerOutline" />
					<Button title="BET STOP" styles={styles.footerButtons} onPress={() => {}} />
				</View>
			</View>
		</Layout>
	);
};

export default LiveMatch;

const styles = StyleSheet.create({
	layout: {
		padding: 0,
		backgroundColor: Colors.secondaryBackgroundColor,
	},
	view: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	buttons: {

	},
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: Colors.lightBackgroundColor,
		borderBottomLeftRadius: 26,
		borderBottomRightRadius: 26,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
	},
	row: {},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		gap: 16,
		display: "flex"
	},
	footerButtons: {
		flex: 1,
		borderWidth: 0,
		backgroundColor: Colors.lightBackgroundColor,
	}
});
