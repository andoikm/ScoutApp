import { View, StyleSheet, Text } from "react-native";
import UndoStep from "./UndoStep";
import CompetitorPointer from "./CompetitorPointer";
import Heading from "./Heading";
import {useState} from "react";
import TimeOutModal from "./TimeOutModal";
import {Colors} from "../styles";

const MatchSides = () => {
	const [openTimeOut, setOpenTimeOut] = useState(false);

	const handleOpen = () => {
		setOpenTimeOut(true);
	}

	return (
		<>
			<View style={baseStyles.view}>
				<View style={[baseStyles.col, baseStyles.competitorCol]}>
					<CompetitorPointer theme="danger" onClickTimeOut={handleOpen}/>
				</View>
				<View style={[baseStyles.col, baseStyles.middleCol]}>
					<Heading theme="secondary">3TH SET</Heading>
					<UndoStep/>
				</View>
				<View style={[baseStyles.col, baseStyles.competitorCol]}>
					<CompetitorPointer theme="info" reversed onClickTimeOut={handleOpen}/>
				</View>
			</View>
				<TimeOutModal
					durationMs={60000}
					open={openTimeOut}
					starter={openTimeOut}
					onOpenChange={setOpenTimeOut}
					onSuccess={() => alert("success")}
					onRightCancel={() => setOpenTimeOut(false)}
					cancelButtonProps={{title: 'SWITCH PLAYER', theme: 'primaryOutline', icon: 'exchange-alt'}}
				>
					<View style={baseStyles.timeOutModalContent}>
						<Text style={[baseStyles.info, {fontWeight: 800}]}>Sahak Karapetyan</Text>
						<Text>Took a Timeout</Text>
					</View>
				</TimeOutModal>
			</>
	);
};

export default MatchSides;

const baseStyles = StyleSheet.create({
	danger: {
		color: Colors.dangerColor,
	},
	info: {
		color: Colors.infoColor,
	},
	view: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		justifyContent: "center",
	},
	competitorCol: {
		flex: 1,
	},
	middleCol: {
		padding: 16,
		gap: 30,
	},
	timeOutModalContent: {
		gap: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	}
});
