import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomSelectPicker from "../stylizedComponents/CustomSelectPicker";
import Fields from "../stylizedComponents/Fields";
import Button from "../stylizedComponents/Button";
import ImagePicker from 'react-native-image-crop-picker';

export default class AddTaskScreen extends Component {
	
	changeColor = color => {
		console.log(color);
	};
	
	emptyMethod = () => null;
	
	render() {
		const options = [
			{
				color: '#2660A4',
				label: 'One',
				value: 1
			},
			{
				color: '#FF6B35',
				label: 'Two',
				value: 2
			},
			{
				color: '#FFBC42',
				label: 'Three',
				value: 3
			},
			{
				color: '#AD343E',
				label: 'Four',
				value: 4
			},
			{
				color: '#051C2B',
				label: 'Five',
				value: 5
			},
			{
				color: '#2660A4',
				label: 'One',
				value: 1
			},
			{
				color: '#FF6B35',
				label: 'Two',
				value: 2
			},
			{
				color: '#FFBC42',
				label: 'Three',
				value: 3
			},
			{
				color: '#AD343E',
				label: 'Four',
				value: 4
			},
			{
				color: '#051C2B',
				label: 'Five',
				value: 5
			},
			{
				color: '#2660A4',
				label: 'One',
				value: 1
			},
			{
				color: '#FF6B35',
				label: 'Two',
				value: 2
			},
			{
				color: '#FFBC42',
				label: 'Three',
				value: 3
			},
			{
				color: '#AD343E',
				label: 'Four',
				value: 4
			},
			{
				color: '#051C2B',
				label: 'Five',
				value: 5
			}
		];
		
		return (
			<View style={styles.root}>
				<Fields onChangeText={this.emptyMethod}
						value={'this.state.username'}
						placeholder='Client name'/>
				<Fields onChangeText={this.emptyMethod}
						value={'this.state.username'}
						placeholder='Client Phone'/>
				<CustomSelectPicker
					placeholder='Select color'
					headerTitle='Select color'
					selectChange={this.changeColor}
					options={options}/>
				<Button
					onPress={this.emptyMethod}
					text='Add recipe'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: "rgba(15,15,15,1)",
		flex: 1,
		padding: 20,
		justifyContent: 'flex-start'
	}
});