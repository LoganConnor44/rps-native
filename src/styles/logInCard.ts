import { StyleSheet } from 'react-native';
import normalizeFontSize from '../utilities/noramlize-font-size';

const logInCard = StyleSheet.create({
	main: {
		backgroundColor: '#dfe6e9',
		alignItems: 'center'
	},
	h1: {
		alignSelf: 'center',
		margin: 10,
		fontSize: normalizeFontSize(40)
	},
	text: {
		textAlign: 'center',
		margin: 10,
		fontSize: normalizeFontSize(16)
	},
	logIn: {
		width: '75%'
	}
});

export default logInCard;