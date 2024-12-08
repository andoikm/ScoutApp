import {Animated, View, StyleSheet} from "react-native";
import React from "react";
import {Colors} from "../styles";


const TableCover = ({ swiped, setWidth, leftTranslate, rightTranslate }) => {
	return (
		<View style={baseStyle.tableColorsBg} onLayout={e => setWidth(e.nativeEvent.layout.width / 2 - 5)}>
			<Animated.View
				style={[
					baseStyle.red,
					{transform: [ { translateX: leftTranslate }]},
					swiped ? baseStyle.rightRadius : baseStyle.leftRadius,
				]}
			/>
			<Animated.View
				style={[
					baseStyle.blue, {transform: [{ translateX: rightTranslate }]},
					swiped ? baseStyle.leftRadius : baseStyle.rightRadius,
				]}
			/>
		</View>
	);
};

export default TableCover;

const baseStyle = StyleSheet.create({
	tableColorsBg: {
		position: 'absolute',
		height: '61%',
		width: '80%',
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		display: "flex",
		flexDirection: 'row',
		top: 0,
	},
	leftRadius: {
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
	},
	rightRadius: {
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	red: {
		flex: 1,
		backgroundColor: Colors.dangerColor,
		marginRight: 5,
		height: '100%',
		overflow: 'hidden',
		//transform: [{ skewY: '-15deg' }],  // Apply skew to make the left border angled
	},
	blue: {
		flex: 1,
		height: '100%',
		backgroundColor: Colors.infoColor,
	},
});