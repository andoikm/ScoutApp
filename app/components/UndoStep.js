import Button from "./Button";
import ConfirmButton from "./ConfirmButton";

const UndoStep = () => {
	return (
		<ConfirmButton
			onConfirm={() => alert('UNDO')}
			title="Undo the last action"
			content="Buy clicking Undo you last action will be removed and you can set new points"
		>
			<Button size="large" icon="back-in-time" title="UNDO" vertical />
		</ConfirmButton>
	);
};

export default UndoStep;
