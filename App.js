import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CompanyStore from "./stores/companyStore";
import CompanyList from "./Components/CompanyList";
import { Root, Header } from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Header />
        <CompanyList />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
