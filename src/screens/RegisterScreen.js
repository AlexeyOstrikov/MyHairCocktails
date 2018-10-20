import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Fields from "../stylizedComponents/Fields";
import Button from "../stylizedComponents/Button";

export default class RegisterScreen extends Component {
	
	state = {
		name: '',
		username: '',
		password: ''
	};
	
	submitFormHandler = () => {
		alert('username: ' + this.state.username)
	};
	
	changeUsername = text => {
		this.setState({username: text});
	};
	
	changeName = text => {
		this.setState({name: text});
	};
	
	changePassword = text => {
		this.setState({password: text});
	};
	
	render() {
		return (
			<View style={styles.root}>
				<Fields onChangeText={this.changeName}
				        value={this.state.name}
				        placeholder='Name'/>
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
					text='Sign Up'/>
			</View>
		)
	}
}

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

RegisterScreen.navigationOptions = {
	title: 'Create new account'
};