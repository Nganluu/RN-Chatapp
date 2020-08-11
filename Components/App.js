import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Tab from './Tab';
import ChatList from './Screens/chatList';
import ChatDetail from './Screens/chatDetail';
import Login from './Screens/login';
import Setting from './Screens/setting';
import AddGroup from './Screens/group/addGroup';
import ConfirmGroup from './Screens/group/confirmAddGroup';
import io from 'socket.io-client'

class App extends React.Component{
    constructor(props){
    super(props);
    this.socket = io.connect("http://192.168.11.6:5000", {jsonp: false});
    socket.emit("connecting",()=>{
      console.log("connected socket");
    })
    }
}
const AppNavigator = createStackNavigator({
    ChatList: {screen: ChatList},
    Messenger: {screen: Tab},
    ChatDetail: {screen: ChatDetail},
    Login: {screen: Login},
    Setting: {screen: Setting},
    AddGroup: {screen: AddGroup},
    ConfirmGroup: {screen: ConfirmGroup}
}, 
{
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(AppNavigator);
