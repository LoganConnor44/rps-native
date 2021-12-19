import * as React from 'react';
import { View, Animated } from 'react-native';
import FA6 from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import iconAnimation from '../styles/iconAnimation';

const IconAnimation = () => {
	let iconList: JSX.Element[] = [
		<FA6 name="hand-scissors-o" size={98} />,
		<FA6 name="hand-paper-o" size={98} style={iconAnimation.rockPaper} />,
		<FA5 name='fist-raised' size={98} style={iconAnimation.rockPaper} />
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
		<View style={iconAnimation.main}>
			<Animated.View style={{ opacity: opacity }} >
				{icon}
			</Animated.View>
		</View>
	);
};

export default IconAnimation;