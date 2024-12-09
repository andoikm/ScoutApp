import { View, StyleSheet } from 'react-native';
import Button from './Button';
import CustomModal from './CustomModal';
import { useState } from 'react';
import RadioInput from './RadioInput';
import TextArea from './TextArea';

const otherId = 4;

const options = [
	{ id: 1, label: 'Technical issue', label2: 'Տեխնիկական խնդիր'},
	{ id: 2, label: 'Health issue', label2: 'Առողջական խնդիր'},
	{ id: 3, label: 'Misbehavior', label2: 'Ոչ եթերային պահվացք'},
	{ id: 4, label: 'Other', label2: 'Այլ պատճառ'},
];

const CancelMatchModal = ({btnStyles, btnProps}) => {
	const [open, setOpen] = useState(false);
	const [reasonCode, setReasonCode] = useState(1);

	return  (
		<>
			<Button
				icon="close"
				styles={btnStyles}
				title="CANCEL MATCH"
				theme="dangerOutline"
				onPress={() => setOpen(true)}
				{...btnProps}
			/>
			<CustomModal
				title='Cancel Match'
				open={open}
				width={500}
				onOpenChange={setOpen}
				onRightSuccess={() => alert('success')}
				onRightCancel={() => setOpen(false)}
				rightSuccessButtonProps={{ title: 'CONFIRM' }}
			>
				<View style={baseStyles.view}>
					<RadioInput options={options} value={reasonCode} onChange={setReasonCode} />
					{reasonCode === otherId &&
						<TextArea value='' onChange={() => {}} />
					}
				</View>
			</CustomModal>
		</>
	);
};

export default CancelMatchModal;

const baseStyles = StyleSheet.create({
	view: {
		display: 'flex',
		gap: 18,
	}
})