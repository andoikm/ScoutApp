import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Colors} from "../styles";
import Heading from "./Heading";
import Button from "./Button";

const CompetitorPointer = ({ theme, reversed }) => {
	return (
		<View style={[baseStyles.view, baseStyles[theme], reversed && baseStyles.reversed]}>
			<View style={[baseStyles.card]}>
				<View style={[baseStyles.padding, baseStyles.header]}>
					<View style={[reversed && {alignItems: 'flex-end'}]}>
						<Heading bold styles={baseStyles.colors[theme]} >Babken</Heading>
						<Heading bold styles={baseStyles.colors[theme]}>Karapetyan</Heading>
					</View>
					<View>
						<Button
							theme="danger"
							size="large"
							styles={[baseStyles[theme], {minWidth: 150, padding: 30}]}
							textStyles={[{fontWeight: 800, fontSize: 30}]}
						>+</Button>
					</View>
				</View>
				<View style={[baseStyles.padding, baseStyles.timeOut, baseStyles.topBordered[theme]]}>
					<TouchableOpacity>
						<Text style={[baseStyles.colors[theme]]}>Time out</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={baseStyles.pointView}>
				<Heading bold size="large" styles={{color: Colors.lightTextColor}}>9</Heading>
				<View />
			</View>
		</View>
	)
};

export default CompetitorPointer;

const baseStyles = StyleSheet.create({
	colors: {
		info: {
			color: Colors.infoColor
		},
		danger: {
			color: Colors.dangerColor
		}
	},
	padding: {
		padding: 16
	},
	topBordered: {
		danger: {
			borderTopWidth: 2,
			borderTopColor: Colors.dangerColor
		},
		info: {
			borderTopWidth: 2,
			borderTopColor: Colors.infoColor
		}
	},
	view: {
		display: 'flex',
		flexDirection: 'row',
		padding: 5,
		borderRadius: 16,
		overflow: 'hidden',
		flex: 1,
		width: '100%'
	},
	reversed: {
		flexDirection: 'row-reverse'
	},
	card: {
		backgroundColor: Colors.lightBackgroundColor,
		borderRadius: 16,
		overflow: 'hidden',
		flex: 1
	},
	danger: {
		backgroundColor: Colors.dangerColor,
		borderColor: Colors.dangerColor,
	},
	info: {
		borderColor: Colors.infoColor,
		backgroundColor: Colors.infoColor,
	},
	header: {
		display: 'flex',
		gap: 16,
	},
	pointView: {
		display: 'flex',
		alignItems: "center",
		justifyContent: 'center',
		padding: 16,
	},
	timeOut: {
		justifyContent: "center",
		alignItems: "center",
	}

})