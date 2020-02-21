import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Tab from './Tab';
import ChatList from './Screens/chatList';
import ChatDetail from './Screens/chatDetail';
import Login from './Screens/login';
import Setting from './Screens/setting';
import AddGroup from './Screens/group/addGroup';
import ConfirmGroup from './Screens/group/confirmAddGroup'

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
