import { StyleSheet } from 'react-native';
import normalizeFontSize from '../utilities/noramlize-font-size';

const authentication = StyleSheet.create({
	main: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#0984e3',
		marginTop: 'auto'
	},
	icons: {
		display: 'flex',
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rockPaper: {
		transform: [{rotate: '-90deg'}]
	},
	card: {
		flex: 1,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#dfe6e9',
		alignItems: 'center',
	},
	textInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		minWidth: '50%',
		width: '75%'
	},
	h1: {
		margin: 10,
		fontSize: normalizeFontSize(45)
	},
	text: {
		textAlign: 'center',
		margin: 10,
		fontSize: normalizeFontSize(16)
	},
	buttons: {
		marginTop: 'auto',
		paddingBottom: 1.5,
		width: '75%'
	}
});

export default authentication;