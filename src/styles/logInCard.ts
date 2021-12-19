import { StyleSheet } from 'react-native';
import normalizeFontSize from '../utilities/noramlize-font-size';

const logInCard = StyleSheet.create({
	main: {
		display: 'flex',
		flex: 1,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#dfe6e9',
		alignItems: 'center',
	},
	textInfo: {
		display: 'flex',
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		minWidth: '50%',
		width: '75%'
	},
	h1: {
		margin: 10,
		fontSize: normalizeFontSize(40)
	},
	text: {
		textAlign: 'center',
		margin: 10,
		fontSize: normalizeFontSize(16)
	},
	logIn: {
		flex: 0.45,
		width: '75%'
	}
});

export default logInCard;