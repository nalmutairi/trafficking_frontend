import React, { Component } from "react";
import { View } from "react-native";
import { Container, Header } from "native-base";

import CompanyList from "../CompanyList";
import CompanyDetail from "../CompanyDetail";

import Nav from "../../Navigation";
// import AppContainer from "../../Navigation/BottomTab";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <View />
        <Header />
        <Nav />
      </Container>
    );
  }
}
export default HomePage;
