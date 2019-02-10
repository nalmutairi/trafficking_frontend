import React, { Component } from "react";

import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Content, Text, Button } from "native-base";

class AddressItem extends Component {
  handlePress() {
    this.props.navigation.navigate("AddressForm", {
      address: this.props.address
    });
  }
  render() {
    let address = this.props.address;

    return (
      <Content>
        <TouchableOpacity onPress={() => this.handlePress(address)}>
          <Text>
            Address {this.props.index}- {address.area} B: {address.block} S:{" "}
            {address.street} H: {address.house}{" "}
          </Text>
        </TouchableOpacity>
      </Content>
    );
  }
}

export default withNavigation(AddressItem);
