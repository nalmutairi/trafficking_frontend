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
      phone: ""
    };
  }
  render() {
    let haveAddress;
    let addressID;
    if (addressStore.addresses.length > 0) {
      haveAddress = true;
      addressID = addressStore.addresses[0].id;
      // console.log(haveAddress);
      // console.log(addressID);
    } else {
      haveAddress = false;
      // console.log(haveAddress);
    }
    return (
      <Overlay isVisible={true} borderRadius={15}>
        <Container>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Area</Label>
                <Input
                  // placeholder={userAddress.area}
                  autoCapitalize="none"
                  onChangeText={area => this.setState({ area })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Block</Label>
                <Input
                  // placeholder={userAddress.block}
                  autoCapitalize="none"
                  onChangeText={block => this.setState({ block })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Street</Label>
                <Input
                  // placeholder={userAddress.street}
                  autoCapitalize="none"
                  onChangeText={street => this.setState({ street })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Jaada</Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={jaada => this.setState({ jaada })}
                />
              </Item>
              <Item stackedLabel>
                <Label>House</Label>
                <Input
                  // placeholder={userAddress.house}
                  autoCapitalize="none"
                  onChangeText={house => this.setState({ house })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Phone</Label>
                <Input
                  // placeholder={userAddress.phone}
                  autoCapitalize="none"
                  onChangeText={phone => this.setState({ phone })}
                />
              </Item>
              {haveAddress ? (
                <Button
                  full
                  onPress={() =>
                    addressStore.updateAddress(
                      this.state,
                      addressID,
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
