import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../navigation/RootNavigator';
import { BACK } from "../actions/actionTypes";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('AuthLoading');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
	firstAction,
	tempNavState
);

const reducer = (state = initialNavState, action) => {
	let nextState;
	switch (action.type) {
		case BACK:
			return nextState = RootNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
		case 'Register':
			return nextState = RootNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Register' }),
				state
			);
		default:
			nextState = RootNavigator.router.getStateForAction(action, state);
			break;
	}
	
	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default reducer;