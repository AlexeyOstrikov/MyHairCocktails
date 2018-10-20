import { createStackNavigator } from "react-navigation";
import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

export default createStackNavigator({
		AuthLoading: {screen: AuthLoadingScreen},
		Login: {screen: SignInScreen},
		Register: {screen: RegisterScreen}
	},
	{
		initialRouteName: 'AuthLoading',
		navigationOptions: {
			headerStyle: {
				backgroundColor: "rgba(15,15,15,1)",
			},
			headerTintColor: '#ff0000',
			headerTitleStyle: {
				color: '#fff',
				fontWeight: '400',
				fontSize: 27,
				justifyContent: 'space-between',
				textAlign: 'center',
				flexGrow: 1,
				paddingRight: 50,
			},
		},
	}
);