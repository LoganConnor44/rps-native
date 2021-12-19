import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import logInCard from '../styles/logInCard';
import Separator from '../components/Separator';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State, AnimatedNode } from 'react-native-gesture-handler';
import runSpring from '../utilities/run-spring';

class LogInCard extends React.Component<null, State> {
    private animationTime: Animated.Clock;
    private translateToY: AnimatedNode<number>;
    private cardY: Animated.Value<number>;
    private dragY: Animated.Value<number>;
    private dragVelocity: Animated.Value<number>;
    private dragState: Animated.Value<number>;
    private onGestureEvent: (...args: any[]) => void;

    constructor(props: null) {
        super(props);

        this.animationTime = new Animated.Clock();
        this.cardY = new Animated.Value(0);
        this.dragY = new Animated.Value(0);
        this.dragVelocity = new Animated.Value(0);
        this.dragState = new Animated.Value(-1);

        const animatingLogic: Array<any> = [
            Animated.stopClock(this.animationTime),
            Animated.set(this.cardY, this.dragY),
            this.cardY
        ];
        const notAnimatingLogic: Array<any> = [
            Animated.set(
                this.cardY,
                Animated.cond(
                    Animated.defined(this.cardY),
                    runSpring(this.animationTime, this.cardY, this.dragVelocity, 0),
                    0
                )
            )
        ];

        this.translateToY = Animated.cond(
            Animated.eq(this.dragState, State.ACTIVE),
            animatingLogic,
            notAnimatingLogic
        );
        this.onGestureEvent = Animated.event([{
            nativeEvent: {
                translationY: this.dragY,
                velocity: this.dragVelocity,
                state: this.dragState
            },
        }]);
    }

    render() {
        return (
            <PanGestureHandler onGestureEvent={this.onGestureEvent} onHandlerStateChange={this.onGestureEvent}>
                <Animated.View style={[logInCard.main, {transform: [{translateY: this.translateToY}]}]}>
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
                </Animated.View>
            </PanGestureHandler>
        );
    }
};

export default LogInCard;