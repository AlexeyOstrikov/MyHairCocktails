import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from "prop-types";

export default class Fields extends Component {
	render() {
		return (
			<View style={[styles.root, this.props.style]}>
				<TextInput
					placeholder={this.props.placeholder}
					value={this.props.value}
					numberOfLines={this.props.numberOfLines}
					multiline={this.props.multiline}
					onChangeText={this.props.onChangeText}
					secureTextEntry={this.props.secureTextEntry}
					style={styles.input}
					autoCorrect={false}
					autoCapitalize={'none'}
					placeholderTextColor='rgba(139,138,141,0.5)'
					underlineColorAndroid='transparent'
				/>
			</View>
		);
	}
}

Fields.propTypes = {
	placeholder: PropTypes.string,
	onChangeText: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	numberOfLines: PropTypes.number,
	multiline: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	
};

const styles = StyleSheet.create({
	root: {
		width: '100%',
		height: 56,
		marginVertical: 10
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: 'rgba(23,23,23,1)',
		color: 'rgba(255,255,255,1)',
		fontSize: 17,
		borderColor: 'grey',
		borderWidth: 1,
	}
});