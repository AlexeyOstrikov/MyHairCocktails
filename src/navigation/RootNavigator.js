import { createSwitchNavigator } from 'react-navigation';
import StartScreen from "../screens/StartScreen";
import AuthStack from "../routes/AuthStack";
import AppStack from "../routes/AppStack";

export const RootNavigator = createSwitchNavigator({
		AuthLoading: {screen: StartScreen},
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
		navigationOptions: {
			header: null
		},
	}
);