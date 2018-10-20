import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Title extends Component {
	render() {
		return (
			<View style={[styles.root, this.props.style]}>
				<Text style={styles.text}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		marginBottom: 23
	},
	text: {
		backgroundColor: "transparent",
		color: "rgba(237,237,237,1)",
		fontSize: 28,
	}
});
