import React, { Component } from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from '@expo/vector-icons';
//import screen
import ChatList from "./Screens/chatList";
import Setting from "./Screens/setting"

class Tab extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>hell222o</Text>
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    ChatList: {screen: ChatList},
    Setting: {screen: Setting}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'ChatList':
            iconName = 'ios-list'
            break
          case 'Setting': 
            iconName = 'ios-settings'
            break
          default:
            break
        }      
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        showLabel: true
      }
    }),
  } 
  );

export default createAppContainer(TabNavigator);