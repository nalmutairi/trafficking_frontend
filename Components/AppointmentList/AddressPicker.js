import React, { Component } from "react";

import { Container, Header, Content, Icon, Picker, Form } from "native-base";

import AddressStore from "../../stores/addressStore";
class AddressPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "0"
    };

    AddressStore.fetchAddresses();
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  getAddresses() {
    console.log("Address", AddressStore.addresses);
    AddressStore.addresses.map(address => {
      let area = "Area" + address.area + address.block + address.street;
      let key = "key" + address.id;
      return <Picker.Item label={area} value={key} />;
    });
  }
  render() {
    const pickerItems = AddressStore.addresses.map(address => {
      return (
        <Picker.Item
          key={"key" + address.id}
          label={"Area" + address.area}
          value={address.id}
        />
      );
    });
    return (
      <Content>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            {pickerItems}
          </Picker>
        </Form>
      </Content>
    );
  }
}
export default AddressPicker;
