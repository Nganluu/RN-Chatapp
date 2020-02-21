import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon, SearchBar, ListItem } from "react-native-elements";

const data = [
  {
    id: 1,
    name: "Irene",
    avatar:
      "https://qph.fs.quoracdn.net/main-qimg-4223093503463eabbbc2d4f5c0c52d66"
  },
  {
    id: 2,
    name: "Jisoo",
    avatar:
      "https://qph.fs.quoracdn.net/main-qimg-31486cf20ac104a78403cdbd211d3bf1"
  },
  {
    id: 3,
    name: "Lee Xian",
    avatar:
      "https://img2.chinadaily.com.cn/images/201907/26/5d3a4280a310d8304552dda7.jpeg"
  },
  {
    id: 4,
    name: "Lee Kwang Soo",
    avatar:
      "https://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2017/05/leekwangsoo_43.jpg"
  }
];
export default class addGroup extends Component {
  state = {
    searchtext: "",
    chose: []
  };
  onSearch = searchtext => {
    this.setState({ searchtext });
  };
  headerleftComponent = () => {
    const { navigation } = this.props;
    return (
      <Icon
        name="arrow-back"
        color="white"
        onPress={() => navigation.goBack()}
      />
    );
  };
  headerrightComponent = () => {
    const { navigation } = this.props;
    return (
      <Icon
        name="arrow-forward"
        color="white"
        onPress={() => navigation.navigate("ConfirmGroup")}
      />
    );
  };
  handleChose = id => {
    const { chose } = this.state;
    chose[id] = !chose[id];
    this.setState({
      chose
    });
  };

  listItemRightIcon = id => {
    return (
      <Icon
        color="#999999"
        name={
          this.state.chose[id]
            ? "radio-button-checked"
            : "radio-button-unchecked"
        }
        onPress={() => this.handleChose(id)}
      />
    );
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={this.headerleftComponent}
          centerComponent={{
            text: "CREATE NEW GROUP",
            style: { color: "white", fontSize: 17 }
          }}
          rightComponent={this.headerrightComponent}
        />
        <SearchBar
          placeholder="Find friends to add"
          onChangeText={this.onSearch}
          value={this.state.searchtext}
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
            bottomDivider
            rightIcon={this.listItemRightIcon(data.id)}
            rightTitleStyle={style.rightTitle}
          />
        ))}
      </View>
    );
  }
}
const style = StyleSheet.create({
  rightTitle: {
    fontSize: 13
  }
});
