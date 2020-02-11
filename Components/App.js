import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Tab from './Tab';
import ChatList from './Screens/chatList';
import ChatDetail from './Screens/chatDetail';
import Login from './Screens/login'

const AppNavigator = createStackNavigator({
    ChatList: {screen: ChatList},
    Messenger: {screen: Tab},
    ChatDetail: {screen: ChatDetail},
    Login: {screen: Login}
}, 
{
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(AppNavigator);
