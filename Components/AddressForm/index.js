import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Overlay } from "react-native-elements";
// NativeBase Components
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label
} from "native-base";
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: "",
      block: "",
      street: "",
      jaada: "",
      house: "",
      phone: "",
      haveAddress: false
    };

    this.setDefaultAddress();
  }
  setDefaultAddress() {
    let address;
    let addressID;
    if (addressStore.addresses.length > 0) {
      address = addressStore.addresses[0];
      addressID = addressStore.addresses[0].id;
      this.state.area = address.area;
      this.state.block = address.block;
      this.state.street = address.street;
      this.state.jaada = address.jaada;
      this.state.house = address.house;
      this.state.phone = address.phone;
      this.state.haveAddress = true;
      // this.setDefaultAddress(address);
      // console.log(haveAddress);
      // console.log(addressID);
    } else {
      // console.log(haveAddress);
    }
  }
  render() {
    return (
      <Overlay isVisible={true} borderRadius={15}>
        <Container>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Area</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.area}
                    autoCapitalize="none"
                    onChangeText={area => this.setState({ area })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={area => this.setState({ area })}
                  />
                )}
              </Item>
              <Item stackedLabel>
                <Label>Block</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.block}
                    autoCapitalize="none"
                    onChangeText={block => this.setState({ block })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={block => this.setState({ block })}
                  />
                )}
              </Item>
              <Item stackedLabel>
                <Label>Street</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.street}
                    autoCapitalize="none"
                    onChangeText={street => this.setState({ street })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={street => this.setState({ street })}
                  />
                )}
              </Item>
              <Item stackedLabel>
                <Label>Jaada</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.jaada}
                    autoCapitalize="none"
                    onChangeText={jaada => this.setState({ jaada })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={jaada => this.setState({ jaada })}
                  />
                )}
              </Item>
              <Item stackedLabel>
                <Label>House</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.house}
                    autoCapitalize="none"
                    onChangeText={house => this.setState({ house })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={house => this.setState({ house })}
                  />
                )}
              </Item>
              <Item stackedLabel>
                <Label>Phone</Label>
                {this.state.haveAddress ? (
                  <Input
                    placeholder={this.state.phone}
                    autoCapitalize="none"
                    onChangeText={phone => this.setState({ phone })}
                  />
                ) : (
                  <Input
                    autoCapitalize="none"
                    onChangeText={phone => this.setState({ phone })}
                  />
                )}
              </Item>
              {this.state.haveAddress ? (
                <Button
                  full
                  onPress={() =>
                    addressStore.updateAddress(
                      this.state,
                      addressStore.addresses[0].id,
                      this.props.navigation
                    )
                  }
                >
                  <Text>Update Address</Text>
                </Button>
              ) : (
                <Button
                  full
                  onPress={() =>
                    addressStore.createAddress(
                      this.state,
                      this.props.navigation
                    )
                  }
                >
                  <Text>Create Address</Text>
                </Button>
              )}

              <Button
                full
                danger
                onPress={() => authStore.logoutUser(this.props.navigation)}
              >
                <Text>LOG OUT</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Overlay>
    );
  }
}

export default withNavigation(observer(AddressForm));
