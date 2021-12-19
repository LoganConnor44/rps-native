import * as React from 'react';
import { View } from 'react-native';
import authentication from '../styles/authentication';
import IconAnimation from '../components/IconAnimation';
import LogInCard from '../components/LogInCard';

const Authentication = () => {
	return (
		<View style={authentication.main}>
			<IconAnimation />
			<LogInCard />
		</View>
	);
};

export default Authentication;