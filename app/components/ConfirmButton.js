import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import CustomModal from "./CustomModal";
import {Colors} from "../styles";

const ConfirmButton = ({children, title, content, modalWidth = 300, onConfirm, contentCentred, contentBold}) => {
	const [open, setOpen] = useState(false);

	const onSuccess = () => {
		onConfirm();
		setOpen(false);
	};

	return (
		<>
			{children && React.cloneElement(children, {onPress: () => setOpen(true)})}
			<CustomModal
				title={title}
				open={open}
				width={modalWidth}
				onOpenChange={setOpen}
				onRightSuccess={onSuccess}
				onRightCancel={() => setOpen(false)}
				rightSuccessButtonProps={{title: 'CONFIRM'}}
			>
				<View style={[
					baseStyles.view,
				]}>
					<Text style={[
						baseStyles.text,
						contentBold && baseStyles.contentBold,
						contentCentred && baseStyles.contentCentred,
					]}>
						{content}
					</Text>
				</View>
			</CustomModal>
		</>
	);
};

export default ConfirmButton;

const baseStyles = StyleSheet.create({
	view: {
		display: 'flex',
		gap: 18,
	},
	text: {
		fontSize: 16,
		color: Colors.secondaryTextColor,
		fontFamily: 'Roboto',
	},
	contentCentred: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		flex: 1,
		width: '100%',
	},
	contentBold: {
		fontWeight: 800,
	}
});
