import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Header, Icon, Input, ListItem } from "react-native-elements";


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
  }
];
export default class confirmAddGroup extends Component {
  state = {
    groupName: ""
  }
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
        return <Icon name="arrow-forward" color="white" onPress={()=>navigation.navigate('ConfirmGroup')} />;
      };
      onChangeName = (groupName) => {
        this.setState({groupName})
      }
  render() {
    return (
      <View style={style.container}>
        <Header
          leftComponent={this.headerleftComponent}
          centerComponent={{
            text: "CREATE NEW GROUP",
            style: { color: "white", fontSize: 17 }
          }}
          rightComponent={this.headerrightComponent}
        />
         <Input
            placeholder="Enter group name"
            inputContainerStyle= {style.input}
            inputStyle = {{color: "gray"}}
            onChangeText = {(text)=> this.onChangeName(text)}
            value = {this.state.groupName}
          />
          <Text style={style.text}>
            2 members
          </Text>
          {data.map(data => (
          <ListItem
            key={data.id}
            leftAvatar={{
              source: { uri: data.avatar }
            }}
            title={data.name}
            bottomDivider
          />
        ))}
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
    input: {
    margin: 10,
    marginTop: 25,
    backgroundColor: "#ebebeb",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ebebeb",
    padding: 5
    },
    text: {
      marginLeft: 25,
      marginTop: 10,
      fontSize: 17,
      color: "gray"
    }
})