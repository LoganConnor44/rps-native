import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import app from './src/styles/app';
import Authentication from './src/pages/Authentication';

const App = () => (
	<NativeRouter>
		<View style={app.main}>
			<Routes>
				<Route path="/" element={<Authentication />} /> 
			</Routes>
		</View>
	</NativeRouter>
);

export default App;

