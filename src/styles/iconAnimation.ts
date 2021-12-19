import { StyleSheet } from 'react-native';

const iconAnimation = StyleSheet.create({
	main: {
		display: 'flex',
		flex: 1.5,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rockPaper: {
		transform: [{rotate: '-90deg'}]
	},
});

export default iconAnimation;