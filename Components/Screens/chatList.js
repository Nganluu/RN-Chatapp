import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, SearchBar, Header } from "react-native-elements";
import ChatDetail from './chatDetail'

const data = [
  {
    id: 1,
    name: "Irene",
    avatar:
      "https://qph.fs.quoracdn.net/main-qimg-4223093503463eabbbc2d4f5c0c52d66",
    time: "9:00 am",
    lastMessege: "Ok, I'll be there"
  },
  {
    id: 2,
    name: "Jisoo",
    avatar:
      "https://qph.fs.quoracdn.net/main-qimg-31486cf20ac104a78403cdbd211d3bf1",
    time: "10.30 am",
    lastMessege: " Ok, see you soon"
  },
  {
    id: 3,
    name: "Lee Xian",
    avatar:
      "https://img2.chinadaily.com.cn/images/201907/26/5d3a4280a310d8304552dda7.jpeg",
    time: "14.00 pm",
    lastMessege: "Yes"
  },
  {
    id: 4,
    name: "Lee Kwang Soo",
    avatar:
      "https://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2017/05/leekwangsoo_43.jpg",
    time: "14.00 pm",
    lastMessege: "Don't say any thing pls"
  }
];

export default class chatList extends React.Component {
  state = {
    search: ""
  };
  onSearch = search => {
    this.setState({ search });
  };
  onPress = ({navigation}) => {
    navigation.navigate('ChatDetail')
  }
  render() {
    const { search } = this.state;
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Header
        placement='left'
        centerComponent={{ text: "MESSENGER", style : {color: "#fff", fontSize: 20} }}
        />
        <SearchBar
          placeholder="Find a friend to chat"
          onChangeText={this.onSearch}
          value={search}
          lightTheme
          round
          containerStyle={{ backgroundColor: "white", borderColor: "white" }}
          inputContainerStyle={{ backgroundColor: "#ededed" }}
        />
        {data.map(data => (
          <ListItem
            key={data.id}
            leftAvatar={{
              source: { uri: data.avatar }
            }}
            title={data.name}
            subtitle={data.lastMessege}
            bottomDivider
            rightTitle={data.time}
            rightTitleStyle={style.rightTitle}
            onPress = {() => navigation.navigate('ChatDetail', {data: data})}
          />
        ))}
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  rightTitle: {
    fontSize: 13
  }
});
