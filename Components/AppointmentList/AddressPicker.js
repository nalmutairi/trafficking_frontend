import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Button,
  Text,
  Left,
  Right
} from "native-base";

import AuthStore from "../../stores/authStore";
import AddressStore from "../../stores/addressStore";
import AppointmentStore from "../../stores/appointmentStore";
import { withNavigation } from "react-navigation";
class AddressPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "0",
      id: null
    };

    AddressStore.fetchAddresses();
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  confirmAddress(appointmentID, address) {
    AppointmentStore.confirmAppointment(appointmentID, address);
  }

  getAddresses() {
    console.log("Address", AddressStore.addresses);
    AddressStore.addresses.map(address => {
      let area =
        address.area +
        " Block: " +
        address.block +
        " Street: " +
        address.street +
        " House: " +
        address.house;
      if (address.jaada) {
        area = area + "Jaada: " + address.jaada;
      }
      let key = "key" + address.id;
      return <Picker.Item label={area} value={key} />;
    });
  }
  render() {
    console.log("SEKECT:", this.state.selected);
    console.log("IM I SELECTED? ", AddressStore.select);
    if (this.state.selected !== 0) {
      AddressStore.select = AddressStore.select + 1;
      console.log("SELECT", AddressStore.select);
    }
    let pickerItems;
    if (AddressStore.addresses) {
      pickerItems = AddressStore.addresses.map(address => {
        let area =
          address.area +
          " Block: " +
          address.block +
          " Street: " +
          address.street +
          " House: " +
          address.house;
        if (address.jaada) {
          area = area + " Jaada: " + address.jaada;
        }

        this.state.id = address.id;
        console.log(this.state.id);
        return (
          <Picker.Item
            key={"key" + address.id}
            label={area}
            value={address.id}
          />
        );
      });
    }
    return (
      <Content>
        <Left>
          <Form>
            <Picker
              placeholder="Choose Address"
              note
              mode="dropdown"
              style={{ width: "100%" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              {pickerItems}
            </Picker>
          </Form>
        </Left>
        <Right>
          {AuthStore.user ? (
            <Content>
              <Button
                block
                info
                onPress={() => this.props.navigation.navigate("AddressForm")}
              >
                <Text>+</Text>
              </Button>
              {this.state.selected !== 0 ? (
                <Button
                  block
                  light
                  onPress={() =>
                    this.confirmAddress(
                      this.props.appointment,
                      this.state.selected
                    )
                  }
                >
                  <Text>Confirm</Text>
                </Button>
              ) : (
                <Content />
              )}
            </Content>
          ) : (
            <Button
              block
              info
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </Button>
          )}
        </Right>
      </Content>
    );
  }
}
export default withNavigation(AddressPicker);
