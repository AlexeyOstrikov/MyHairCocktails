import React from 'react';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { RootNavigator } from "./RootNavigator";

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { AppNavigator };