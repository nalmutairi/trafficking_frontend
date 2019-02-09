import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import { observer } from "mobx-react";
import { Overlay } from "react-native-elements";

import Login from "../Login";
import Signup from "../Signup";
import AddressForm from "../AddressForm";
import authStore from "../../stores/authStore";
import Loading from "../Loading";
import addressStore from "../../stores/addressStore";

class Account extends Component {
  render() {
    if (authStore.user === null) {
      return (
        <Overlay isVisible={true} borderRadius={15}>
          <Container>
            <Tabs>
              <Tab heading="Login">
                <Login />
              </Tab>
              <Tab heading="Signup">
                <Signup />
              </Tab>
            </Tabs>
          </Container>
        </Overlay>
      );
    } else {
      if (addressStore.loading) {
        return <Loading />;
      } else {
        return <AddressForm />;
      }
    }
  }
}

export default observer(Account);
