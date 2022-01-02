import * as React from 'react';
import { Text, View, Dimensions, Button, Alert } from 'react-native';
import logInCard from '../styles/logInCard';
import Separator from '../components/Separator';
import BottomSheet from 'reanimated-bottom-sheet';

interface LogInCardProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
}
const LogInCard = (props: LogInCardProps) => {
    const cardHeight = Dimensions.get('window').height / 2;
    const dynamicCardStyles = {
        height: cardHeight
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
            <View style={logInCard.logIn}>
                <Button title="Ready Player One" onPress={() => props.bottomSheetRef.current?.snapTo(2)} />
            </View>
        </View>
    );
}

export default LogInCard;