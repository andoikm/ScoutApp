import {Entypo, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Colors} from "../styles";

const Icons = ({ icon, size, color = Colors.primaryTextColor, ...rest }) => {

	let IconComponent = Ionicons;

	if (['back-in-time', 'chevron-left', 'chevron-right', 'email'].indexOf(icon) > -1){
		IconComponent = Entypo;
	}

	if (['timer-outline', 'menu-right-outline', 'lock-outline'].indexOf(icon) > -1){
		IconComponent = MaterialCommunityIcons;
	}

	if (['pause', 'play'].indexOf(icon) > -1){
		IconComponent = Feather;
	}

	if (['exchange-alt', 'plus'].indexOf(icon) > -1){
		IconComponent = FontAwesome5;
	}

	return <IconComponent name={icon} size={size} color={color} {...rest} />
};

export default Icons;