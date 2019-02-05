import React, { Component } from "react";
import { observer } from "mobx-react";

// // NativeBase Components
import { Container } from "native-base";
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";
import AddressForm from "../AddressForm";
import Loading from "../Loading";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (addressStore.loading) {
      return <Loading />;
    } else {
      return <AddressForm />;
    }
  }
}
export default observer(Profile);
