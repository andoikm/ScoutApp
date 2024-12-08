import React from "react";
import { StyleSheet } from 'react-native';
import Avatar from "./Avatar";
import Heading from "./Heading";

const AvatarWithName = ({src, name, lastName}) => (
	<>
		<Avatar src={src} />
		<Heading styles={baseStyle.heading} bold size="medium">
			{name}
		</Heading>
		<Heading styles={baseStyle.heading} bold size="medium">
			{lastName}
		</Heading>
	</>
);

export default AvatarWithName;

const baseStyle = StyleSheet.create({
	heading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});