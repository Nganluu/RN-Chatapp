import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList
} from "react-native";
import io from "socket.io-client";
import { Header, Icon, ListItem, Avatar } from "react-native-elements";

export default class chatDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: "",
      messages: [],
      yourMessage: []
    };
    this.socket = io("http://192.168.1.194:5000", { jsonp: false });
    // socket.on("connecting", ()=>{
    //   console.log("hello socket")
    // })
  }

  componentDidMount() {
    const { data } = this.props.navigation.state.params;
    this.setState({
      messages: [
        {
          id: 1,
          text: ["hello", "How are you?", `${data.lastMessege}`],
          createdAt: new Date(),
          user: {
            id: data.id,
            name: data.name,
            avatar: data.avatar
          }
        }
      ]
    });
  }
  customCenterIcon = () => {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={style.circle}></View>
        <Text style={{ color: "white", fontSize: 20 }}>{data.name}</Text>
      </View>
    );
    color: "white";
  };

  leftComponent = () => {
    const { navigation } = this.props;
    return (
      <Icon
        onPress={() => navigation.goBack()}
        name="arrow-back"
        color="#fff"
      />
    );
  };

  onChangeMessage = text => {
    this.setState({ newMessage: text });
  };

  sendMess = () => {
    console.log("Sending " + this.state.newMessage);
  };

  // onSend(messages = []) {
  //   this.setState(previousState => ({
  //     messages: GiftedChat.append(previousState.messages, messages)
  //   }));
  // }

  onSend = () => {
    if (this.state.newMessage) {
      this.socket.emit("send-message", this.state.newMessage);
      console.log("socket")
      this.setState({
        yourMessage: [...this.state.yourMessage, this.state.newMessage],
        newMessage: ""
      });
    }
  };
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "column"
        }}
      >
        <Header
          leftComponent={this.leftComponent}
          centerComponent={this.customCenterIcon}
          rightComponent={{ icon: "call", color: "#fff" }}
        />
        {/* <View>
          {this.state.messages
            ? this.state.messages.map(data => (
                <ListItem
                  containerStyle = {{backgroundColor: ''}}
                  key={data.id}
                  leftAvatar={{ source: { uri: data.user.avatar } }}
                />
              ))
            : null}
        </View> */}
        <FlatList
          keyExtractor={data => data.id}
          data={this.state.messages}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  padding: 15,
                  flexDirection: "row",
                  justifyContent: "flex-start"
                }}
              >
                <Avatar
                  size="medium"
                  rounded
                  source={{ uri: item.user.avatar }}
                />
                <View style={{ flexDirection: "column" }}>
                  {item.text.map(mess => (
                    <View style={style.chatMess}>
                      <Text style={{ fontSize: 16, color: "#4d4d4d" }}>
                        {mess}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View
                style={{
                  padding: 15,
                  flexDirection: "row-reverse"
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  {this.state.yourMessage.map(mess => (
                    <View style={style.myMess}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {mess}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 5
          }}
        >
          <Icon name="control-point" color="#00B2FF" size={35} />
          <Icon name="photo" color="#00B2FF" size={35} />
          <TextInput
            style={style.Input}
            onSubmitEditing={this.sendMess}
            placeholder="Type something..."
            onChangeText={text => this.onChangeMessage(text)}
            value={this.state.newMessage}
          />
          <View
            style={{ backgroundColor: "#00B2FF", padding: 3, borderRadius: 50 }}
          >
            <Icon onPress={this.onSend} name="send" color="#fff" />
          </View>
        </View>
        {/* <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user = {{_id : data.id}}
        /> */}
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  chatMess: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 50
  },
  myMess: {
    backgroundColor: "#00B2FF",
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 50
  },
  circle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: "#01D21A",
    marginRight: 7
  },
  Input: {
    borderWidth: 1,
    width: "70%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderColor: "#CCC",
    fontSize: 16,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50
  }
});
