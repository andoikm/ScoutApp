import { View, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { Colors } from "../styles";
import Heading from "../components/Heading";
import ScoreTag from "../components/ScoreTag";
import MatchSides from "../components/MatchSides";
import Button from "../components/Button";
import ScoreTable from "../components/ScoreTable";
import CancelMatchModal from "../components/CancelMatchModal";
import ConfirmButton from "../components/ConfirmButton";

const LiveMatch = () => {
	return (
		<Layout contentStyles={styles.layout}>
			<View style={styles.mainContainer}>
				<View style={styles.contentWrapper}>
					<View style={styles.scoreSection}>
						<ScoreTag>
							<Heading>Total Score</Heading>
							<Heading bold>1 : 1</Heading>
						</ScoreTag>
					</View>

					<View style={styles.matchSidesSection}>
						<MatchSides />
					</View>

					<View style={styles.scoreTableSection}>
						<ScoreTable />
					</View>
				</View>

				<View style={styles.footer}>
					<Button icon="timer-outline" title="TIME OUT" styles={styles.footerButton} onPress={() => {}} />
					<Button icon="play" title="VIEW STREAM" styles={styles.footerButton} onPress={() => {}} />
					<CancelMatchModal btnStyles={styles.footerButton} />
					<ConfirmButton
						contentBold
						contentCentred
						content="Are you sure you want to close the betting markets?"
						onConfirm={() => alert("confirmed")}
						cancelButtonProps={{title: "NO"}}
						successButtonProps={{title: "YES", theme: "danger"}}
					>
						<Button icon="pause" title="BET STOP" styles={styles.footerButton} />
					</ConfirmButton>
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

	mainContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},

	contentWrapper: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: Colors.accentBackgroundColor,
		borderBottomLeftRadius: 26,
		borderBottomRightRadius: 26,
		paddingHorizontal: 20,
		paddingBottom: 20,
	},

	scoreSection: {
		marginBottom: 20,
	},

	matchSidesSection: {
		marginBottom: 20,
	},

	scoreTableSection: {
		marginBottom: 30,
	},

	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		gap: 16,
	},

	footerButton: {
		flex: 1,
		borderWidth: 0,
		backgroundColor: Colors.lightBackgroundColor,
	},
});
