import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { CustomPicker } from "react-native-custom-picker";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get("window");

export default class CustomSelectPicker extends Component {
	static propTypes = {
		options: PropTypes.array.isRequired,
		selectChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		headerTitle: PropTypes.string,
	};
	
	renderHeader = () => {
		return (
			<View style={styles.headerFooterContainer}>
				<Text style={styles.headerText}>{this.props.headerTitle}</Text>
			</View>
		)
	};
	
	renderField = (settings) => {
		const {selectedItem, defaultText, getLabel, clear} = settings;
		return (
			<View style={styles.container}>
				{!selectedItem && <Text style={[styles.text, {color: 'grey'}]}>{defaultText}</Text>}
				{selectedItem && (
					<View style={styles.innerContainer}>
						<View style={[styles.box, {backgroundColor: selectedItem.color}]}/>
						<Text style={styles.text}>
							{getLabel(selectedItem)}
						</Text>
						<TouchableOpacity style={styles.clearButton} onPress={clear}>
							<Text style={{color: '#fff'}}>
								<Icon
									name={"ios-close-circle-outline"}
									size={40}
									color={"#fff"}
								/>
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		)
	};
	
	renderOption = (settings) => {
		const {item, getLabel} = settings;
		return (
			<View style={styles.optionContainer}>
				<View style={[styles.box, {backgroundColor: item.color}]}/>
				<Text style={styles.optionText}>{getLabel(item)}</Text>
			</View>
		)
	};
	
	changeHandler = value => {
		this.props.selectChange(value);
	};
	
	render() {
		return (
			<View>
				<CustomPicker
					placeholder={this.props.placeholder}
					options={this.props.options}
					getLabel={item => item.label}
					fieldTemplate={this.renderField}
					optionTemplate={this.renderOption}
					headerTemplate={this.renderHeader}
					onValueChange={this.changeHandler}
					maxHeight={height / 2}
					modalStyle={styles.modalStyle}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(23,23,23,1)',
		color: 'rgba(255,255,255,1)',
		fontSize: 17,
		borderRadius: 8,
		borderColor: 'grey',
		borderWidth: 1,
		height: 56,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(23,23,23,1)',
		justifyContent: 'space-between',
		flexGrow: 1
	},
	text: {
		color: 'rgba(255,255,255,1)',
		fontSize: 18,
		flexGrow: 1
	},
	headerFooterContainer: {
		padding: 10,
		alignItems: 'center',
		backgroundColor: 'rgba(23,23,23,1)',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	headerText: {
		color: 'rgba(255,255,255,1)',
		fontSize: 20,
		fontWeight: '600'
	},
	clearButton: {marginLeft: 10},
	optionContainer: {
		padding: 10,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		backgroundColor: 'rgba(23,23,23,1)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	optionText: {
		color: 'rgba(255,255,255,1)',
		fontSize: 17,
	},
	box: {
		width: 40,
		height: 40,
		marginRight: 10
	},
	modalStyle: {
		borderRadius: 8,
		padding: 5,
		backgroundColor: 'rgba(23,23,23,1)',
	}
});