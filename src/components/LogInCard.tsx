import * as React from 'react';
import { Text, View, Dimensions, Button, Alert } from 'react-native';
import logInCard from '../styles/logInCard';
import Separator from '../components/Separator';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider } from 'firebase/auth';
import firebaseConnection from '../configs/firebase-connection';

interface LogInCardProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
}
const LogInCard = (props: LogInCardProps) => {
    const cardHeight = Dimensions.get('window').height / 2;
    const dynamicCardStyles = {
        height: cardHeight
    };

    const buttonOpacity = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(buttonOpacity.value, {
                duration: 200
            })
        }
    });

    const firebaseUIConfig = {
		signInFlow: 'popup',
		signInOptions: [
			GoogleAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	};
    
    return (
        <View style={ {...logInCard.main, ...dynamicCardStyles} }>
            <Separator />
            <View>
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
            <Animated.View style={[logInCard.logIn, animatedStyle]}>
                <Button title="Ready Player One" onPress={ () => (buttonOpacity.value = 0) } />
                <StyledFirebaseAuth className="google-sign-in" uiConfig={firebaseUIConfig} firebaseAuth={firebaseConnection.auth()} />
            </Animated.View>
        </View>
    );
}

export default LogInCard;