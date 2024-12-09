import {useState} from "react";
import {Text, StyleSheet} from "react-native";
import Button from "./Button";
import CustomModal from "./CustomModal";
import {Colors} from "../styles";


const UndoStep = () => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<Button size="large" icon="back-in-time" title="UNDO" vertical onPress={() => setOpen(true)} />
			<CustomModal
				open={open}
				title="Undo the last action"
				width={300}
				onRightCancel={() => setOpen(false)}
				onRightSuccess={() => alert('Undo')}
			>
				<Text style={baseStyle.text}>
					Buy clicking Undo you last action will be removed and you can set new points
				</Text>
			</CustomModal>
		</>
	);
};

export default UndoStep;

const baseStyle = StyleSheet.create({
	text: {
		color: Colors.secondaryTextColor,
		fontSize: 14,
		fontFamily: 'Roboto'
	}
})