import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Switch } from "react-native";
import { connect } from "react-redux";
import SwitchSelector from 'react-native-switch-selector';
import Button from "../stylizedComponents/Button";
import { switchLanguage, translate } from "../localization/i18n";

const rusIcon = require('../assets/images/rus.png');
const engIcon = require('../assets/images/eng.png');

class AuthLoadingScreen extends Component {
	
	goToCreateNewAccount = () => {
		this.props.navigation.navigate("Register");
	};
	
	goToSignIn = () => {
		this.props.navigation.navigate("Login");
	};
	
	changeLang = value => {
		console.log(value);
		switchLanguage(value, this);
	};
	
	customIcon = icon => (
		<Image
			style={{width: 25, height: 25, marginRight: 10}}
			source={icon}
		/>
	);
	
	render() {
		return (
			<View style={styles.root}>
				<Image
					style={styles.logo}
					source={require('../assets/images/logo.jpg')}
				/>
				<Text style={styles.appName}>My Hair Cocktails</Text>
				<Button
					onPress={this.goToCreateNewAccount}
					text={translate('createNewAccount')}/>
				<Button
					onPress={this.goToSignIn}
					style={{marginBottom: 40}}
					text={translate('signIn')}/>
				<SwitchSelector
					initial={0}
					onPress={value => this.changeLang(value)}
					textColor='#7a44cf'
					selectedColor='#fff'
					fontSize={16}
					backgroundColor='#FD5739'
					buttonColor='#7a44cf'
					borderColor='#7a44cf'
					hasPadding
					options={[
						{label: 'English', value: 'en', customIcon: this.customIcon(engIcon)},
						{label: 'Русский', value: 'ru', customIcon: this.customIcon(rusIcon)},
					]}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgba(15,15,15,1)",
		padding: 20
	},
	logo: {
		width: 120,
		height: 120,
		borderRadius: 60,
		borderWidth: 5,
		borderColor: '#ffffff'
	},
	appName: {
		color: '#ffffff',
		fontSize: 28,
		fontWeight: 'bold',
		paddingVertical: 40
	},
});

AuthLoadingScreen.navigationOptions = {
	header: null,
};


const mapStateToProps = state => ({
	user: state.user.user
});

export default connect(mapStateToProps)(AuthLoadingScreen);
