import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles";

const SCORE_DATA = Array.from({ length: 7 }, (_, i) => ({
	description: `Set ${i + 1}`,
	homeScore: i,
	awayScore: 7 - i,
}));

const PlayerCell = ({ name, style }) => (
	<View style={[styles.row, styles.playerCell, style]}>
		<Text style={styles.lightText}>{name}</Text>
	</View>
);

const ScoreCell = ({ content, style }) => (
	<View style={[styles.row, styles.scoreCell, style]}>
		<Text>{content}</Text>
	</View>
);

const ScoreTable = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.column, styles.playerCellCol]}>
				<View style={styles.row} />
				<PlayerCell name="Babken Harutyunyan" style={styles.topLeft} />
				<PlayerCell name="Sahak Karapetyn" style={styles.bottomLeft} />
			</View>

			{SCORE_DATA.map((set, index) => {
				const isLast = index === SCORE_DATA.length - 1;

				return (
					<View key={set.description} style={styles.column}>
						<ScoreCell content={set.description} style={styles.transparentBackground} />
						<ScoreCell content={set.homeScore} style={isLast && styles.topRight} />
						<ScoreCell content={set.awayScore} style={isLast && styles.bottomRight} />
					</View>
				);
			})}
		</View>
	);
};

export default ScoreTable;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 1,
		width: '100%'
	},
	column: {
		flexDirection: "column",
		gap: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		height: 50,
		width: 120,
		justifyContent: "center",
		alignItems: "center",
	},
	playerCellCol: {
		flex: 1
	},
	playerCell: {
		width: "100%",
		paddingLeft: 20,
		alignItems: "flex-start",
	},
	scoreCell: {
		backgroundColor: Colors.lightBackgroundColor,
	},
	lightText: {
		color: Colors.lightTextColor,
	},
	transparentBackground: {
		backgroundColor: "transparent",
	},
	topLeft: {
		borderTopLeftRadius: 10,
		backgroundColor: Colors.dangerColor,
	},
	bottomLeft: {
		borderBottomLeftRadius: 10,
		backgroundColor: Colors.infoColor,
	},
	topRight: {
		borderTopRightRadius: 10,
	},
	bottomRight: {
		borderBottomRightRadius: 10,
	},
});
