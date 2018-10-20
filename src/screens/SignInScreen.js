import React, { Component } from "react";
import Button from "../stylizedComponents/Button";
import Fields from "../stylizedComponents/Fields";
import { View, Text, StyleSheet } from "react-native";

export default class SignInScreen extends Component {
	forgotPasswordHandler = () => {
		alert('In Progress')
	};
	
	state = {
		username: '',
		password: ''
	};
	
	submitFormHandler = () => {
		alert('username: ' + this.state.username)
	};
	
	changeUsername = text => {
		this.setState({username: text});
	};
	
	changePassword = text => {
		this.setState({password: text});
	};
	
	render() {
		return (
			<View style={styles.root}>
				<Fields onChangeText={this.changeUsername}
				        value={this.state.username}
				        placeholder='Username'/>
				<Fields
					onChangeText={this.changePassword}
					value={this.state.password}
					secureTextEntry
					placeholder='Password'/>
				<Button
					onPress={this.submitFormHandler}
					text='Sign In'/>
				<Text onPress={this.forgotPasswordHandler}
				      style={styles.forgotYourPassword}>
					Forgot your password?</Text>
			</View>
		);
	}
}

SignInScreen.navigationOptions = {
	title: 'Sign In'
};

const styles = StyleSheet.create({
	root: {
		backgroundColor: "rgba(15,15,15,1)",
		flex: 1,
		padding: 20,
		justifyContent: 'center'
	},
	forgotYourPassword: {
		backgroundColor: "transparent",
		textAlign: "center",
		color: "rgba(237,237,237,1)",
		fontSize: 13,
	}
});
