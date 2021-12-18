import * as React from 'react';
import { Text, View, StyleSheet, Animated, Button, Alert } from 'react-native';
import FA6 from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import authentication from '../styles/authentication';
import Separator from '../components/Separator';

const Authentication = () => {
	let iconList: JSX.Element[] = [
		<FA6 name="hand-scissors-o" size={98} />,
		<FA6 name="hand-paper-o" size={98} style={authentication.rockPaper} />,
		<FA5 name='fist-raised' size={98} style={authentication.rockPaper} />
	];
	const opacity: Animated.Value = React.useRef<Animated.Value>(new Animated.Value(0)).current;
	const [icon, setIcon] = React.useState<JSX.Element>(iconList[0]);

	const fadeIn = (): Animated.CompositeAnimation => Animated.timing(opacity, {
		toValue: 1,
		delay: 500,
		useNativeDriver: true
	});
	const fadeOut = (): Animated.CompositeAnimation => Animated.timing(opacity, {
		toValue: 0,
		delay: 2000,
		useNativeDriver: true
	});
	const fadeInAndOut = (): Animated.CompositeAnimation => Animated.sequence([
		fadeIn(),
		fadeOut()
	]);

	const rotateIcons = (): void => {
		Animated.loop(
			fadeInAndOut(),
			{ iterations: 1 }
		).start((event) => {
			if (event.finished) {
				const firstItem: JSX.Element = (iconList.shift() as JSX.Element);
				iconList.push(firstItem);
				setIcon(iconList[0]);

				rotateIcons();
			}
		});
	};

	React.useEffect(() => {
		rotateIcons()
		}, []
	);
	return (
		<View style={authentication.main}>
			<View style={authentication.icons}>
				<Animated.View style={{ opacity: opacity }} >
					{icon}
				</Animated.View>
			</View>
			<View style={authentication.card}>
				<Separator />
				<View style={authentication.textInfo}>
					<Text style={authentication.h1}>
						RPS
					</Text>
					<Text style={authentication.text}>
						A friendly game of rock, paper, scissors with real life consequences.
					</Text>
					<Text style={authentication.text}>
						We&apos;ve been waiting for you.
					</Text>
				</View>
				<View style={authentication.logIn}>
					<Button title="Ready Player One"
						onPress={() => Alert.alert('Simple Button pressed')}
					/>
				</View>
			</View>
		</View>
	);
};

export default Authentication;