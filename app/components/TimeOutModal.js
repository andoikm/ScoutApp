import React from "react";
import {View, StyleSheet} from "react-native";
import CustomModal from "./CustomModal";
import CircleTimer from "./CircleTimer";

const TimeOutModal = ({
	title,
	children,
	open,
	durationMs,
	modalWidth = 400,
	onRightCancel,
	cancelButtonProps = {},
	onSuccess,
	onOpenChange,
	successButtonProps = {title: 'CONTINUE'}
	}) => {
	return (
		<>
			<CustomModal
				open={open}
				backgrounded
				title={title}
				width={modalWidth}
				onOpenChange={onOpenChange}
				onRightSuccess={onSuccess}
				onRightCancel={onRightCancel}
				rightCancelButtonProps={cancelButtonProps}
				rightSuccessButtonProps={successButtonProps}
			>
				<View style={[baseStyles.view]}>
					<CircleTimer size={150} durationMs={durationMs}/>
					{children}
				</View>
			</CustomModal>
		</>
	);
};

export default TimeOutModal;

const baseStyles = StyleSheet.create({
	view: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		gap: 18,
	},
});
