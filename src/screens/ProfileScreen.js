import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from "../stylizedComponents/Button";

export default class ProfileScreen extends Component {
	
	logOutHandler = () => {
		this.props.navigation.navigate("AuthLoading");
	};
	
	render() {
		return (
			<View style={styles.root}>
				<Button
					onPress={this.logOutHandler}
					text='Log out'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: "rgba(15,15,15,1)",
		flex: 1,
		padding: 20,
		justifyContent: 'center'
	},
});