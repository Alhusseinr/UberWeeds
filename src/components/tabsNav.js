import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../scenes/dispensaryList';
import AccountScreen from '../scenes/account';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class Tabs extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator 
                    screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => { 
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'ios-home';
                        } else if (route.name === 'Account') {
                            iconName = 'ios-person';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Account" component={AccountScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Tabs;