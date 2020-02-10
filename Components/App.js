import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Tab from './Tab';
import ChatList from './Screens/chatList';
import ChatDetail from './Screens/chatDetail'

const AppNavigator = createStackNavigator({
    ChatList: {screen: ChatList},
    Messenger: {screen: Tab},
    ChatDetail: {screen: ChatDetail}
}, 
{
    initialRouteName: 'Messenger',
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(AppNavigator);
