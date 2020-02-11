import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class login extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.icon}>
          <Ionicons name="ios-chatbubbles" size={150} color="#00B2FF" />
          <Text style={{ fontSize: 20 }}>Welcome to myApps</Text>
        </View>
        <View style={{flex: 1, width: "80%"}}>
          <Input
            placeholder="Enter your email"
            inputContainerStyle= {style.input}
            leftIcon={
              <Icon
                name="user"
                size={24}
                color="gray"
                style={style.inputIcon}
              />
            }
          />

          <Input
            placeholder="Enter your password"
            inputContainerStyle= {style.input}
            leftIcon={
              <Icon
                name="lock"
                size={24}
                color="gray"
                style={style.inputIcon}
              />
            }
            //   errorStyle={{ color: "red" }}
            //   errorMessage="ENTER A VALID ERROR HERE"
          />
          <Button
            buttonStyle={style.button}
            titleStyle={{ fontSize: 17 }}
            title="Login"
            onPress = {()=>this.props.navigation.navigate('Messenger')}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 2,
    marginBottom: 15,
    borderColor: "#00B2FF",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5
  },
  inputIcon: {
    marginRight: 8
  },
  button: {
    marginTop: 20
  }
});
