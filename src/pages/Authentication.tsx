import * as React from 'react';
import { View } from 'react-native';
import authentication from '../styles/authentication';
import IconAnimation from '../components/IconAnimation';
import BottomSheet from 'reanimated-bottom-sheet';
import LogInCard from '../components/LogInCard';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

const Authentication = () => {
	const bottomSheetRef: React.RefObject<BottomSheet> = React.useRef<BottomSheetBehavior>(null);
	const renderContent = (): JSX.Element => <LogInCard bottomSheetRef={bottomSheetRef} />

	return (
		<View style={authentication.main}>
			<IconAnimation />
			<BottomSheet ref={bottomSheetRef}
				snapPoints={['50%', '35%', '10%']}
				initialSnap={1}
				borderRadius={30}
				renderContent={renderContent}
				//enabledContentTapInteraction set to false is needed to allow buttons within bottom sheet to 
				//execute onPress
				//after reading their GitHib issues - seems like a bug
				enabledContentTapInteraction={false}
			/>
		</View>
	);
};

export default Authentication;