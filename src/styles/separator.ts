import { StyleSheet } from 'react-native';

const separator = StyleSheet.create({
    main: {
        borderBottomColor: '#737373',
        alignSelf: 'center',
        width: '25%',
        marginTop: 8,
        borderBottomWidth: 3,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        opacity: 0.5
    }
});

export default separator;