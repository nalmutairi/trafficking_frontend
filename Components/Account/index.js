import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";

import Login from "../Login";
import Signup from "../Signup";

class Account extends Component {
  render() {
    return (
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
    );
  }
}
export default Account;
