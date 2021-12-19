import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import logInCard from '../styles/logInCard';
import Separator from '../components/Separator';

const LogInCard = () => {
	return (
		<View style={logInCard.main}>
            <Separator />
            <View style={logInCard.textInfo}>
                <Text style={logInCard.h1}>
                    RPS
                </Text>
                <Text style={logInCard.text}>
                    A friendly game of rock, paper, scissors with real life consequences.
                </Text>
                <Text style={logInCard.text}>
                    We&apos;ve been waiting for you.
                </Text>
            </View>
            <View style={logInCard.logIn}>
                <Button title="Ready Player One"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </View>
	);
};

export default LogInCard;