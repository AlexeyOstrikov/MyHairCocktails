import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<TouchableOpacity style={[styles.root, this.props.style]}
			                  onPressOut={this.props.onPress}>
				{this.props.isSubmitting ? (
					<ActivityIndicator size='large' color='white'/>
				) : (
					<Text style={styles.text}>
						{this.props.text}
					</Text>
				)}
			</TouchableOpacity>
		);
	}
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	style: PropTypes.any,
	isSubmitting: PropTypes.bool,
};

const styles = StyleSheet.create({
	root: {
		height: 56,
		width: '100%',
		marginVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		backgroundColor: 'rgba(253,87,57,1)'
	},
	text: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		fontSize: 17,
		fontFamily: 'SFUIText-Regular'
	}
});
