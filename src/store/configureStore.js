import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistCombineReducers, persistStore } from "redux-persist";
import userReducer from "./reducers/user";
import navReducer from "./reducers/navigation";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);

const middleware = [
	thunkMiddleware,
	appNavigatorMiddleware
];

const persistConfig = {
	key: "root",
	storage,
	blacklist: ['user']
};

const rootReducer = persistCombineReducers(persistConfig, {
	user: userReducer,
	nav: navReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export default () => {
	const store = createStore(rootReducer, enhancers);
	const persistor = persistStore(store);
	return {store, persistor};
}