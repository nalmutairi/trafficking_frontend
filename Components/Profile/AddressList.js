import React, { Component } from "react";

import { Text, List } from "native-base";

import AddressItem from "./AddressItem";
class AddressList extends Component {
  render() {
    let addresses = this.props.address;
    let AddressList;
    if (addresses) {
      AddressList = addresses.map((address, index) => (
        <AddressItem address={address} index={index + 1} key={address.id} />
      ));
    }

    if (AddressList) {
      return <List>{AddressList}</List>;
    } else {
      return <Text>No address</Text>;
    }
  }
}

export default AddressList;
