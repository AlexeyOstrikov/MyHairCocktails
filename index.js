import React from "react";
import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import configureStore from './src/store/configureStore';
import axios from './src/axios-api';
import App from "./src/App";

const {store} = configureStore();

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

axios.interceptors.request.use(config => {
	try {
		config.headers['Token'] = store.getState().user.token;
	} catch (e) {
		// do nothing
	}
	return config;
});

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent('MyHairCocktails', () => App);
