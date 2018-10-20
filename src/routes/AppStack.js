import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const TabsNavigation = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({focused}) => (
					<Icon
						name={focused ? "ios-home" : "ios-home-outline"}
						size={30}
						color={"#fff"}
					/>
				)
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({focused}) => (
					<Icon
						name={focused ? "ios-person" : "ios-person-outline"}
						size={30}
						color={"#fff"}
					/>
				)
			}
		},
		Add: {
			screen: AddTaskScreen,
			navigationOptions: {
				tabBarIcon: ({focused}) => (
					<Icon
						name={focused ? "ios-person" : "ios-person-outline"}
						size={30}
						color={"#fff"}
					/>
				)
			}
		}
	},
	{
		initialRouteName: 'Home',
		tabBarOptions: {
			showLabel: true,
			labelStyle: {
				fontSize: 15,
				color: '#fff'
			},
			style: {
				backgroundColor: '#000',
			},
		}
	}
);

export default TabsNavigation;