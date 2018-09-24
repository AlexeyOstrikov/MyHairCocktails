import React, { Component } from "react";
import { View, StyleSheet,Text } from "react-native";

export default class Back extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text>Back</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  shape: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
