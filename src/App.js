import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { DotIndicator } from 'react-native-indicators';
import { StatusBar, Image, Text, StyleSheet, View } from "react-native";
import configureStore from './store/configureStore';
import { AppNavigator } from './navigation/AppNavigator';

const {persistor, store} = configureStore();

const LoadingView = () => (
	<View style={styles.root}>
		<StatusBar hidden={true}/>
		<Image
			style={styles.logo}
			source={require('./assets/images/logo.jpg')}
		/>
		<Text style={styles.appName}>My Hair Cocktails</Text>
		<DotIndicator size={10} style={{flex: 0}} count={4} color='white'/>
	</View>
);

const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgba(15,15,15,1)",
		padding: 20
	},
	logo: {
		width: 120,
		height: 120,
		borderRadius: 60,
		borderWidth: 5,
		borderColor: '#ffffff'
	},
	appName: {
		color: '#ffffff',
		fontSize: 28,
		fontWeight: 'bold',
		paddingVertical: 40
	}
});

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<LoadingView/>} persistor={persistor}>
					<AppNavigator/>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
