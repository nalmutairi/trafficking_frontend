import React, { Component } from "react";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { View } from "react-native";
import { Text, List, Button, Content, Image, Thumbnail } from "native-base";

import AppointmentStore from "../../stores/appointmentStore";
import AuthStore from "../../stores/authStore";
import AddressStore from "../../stores/addressStore";
import AppointmentItem from "./AppointmentItem";

import Checkout from "../Checkout";

class AppointmentList extends Component {
  componentDidMount() {
    AddressStore.fetchAddresses();
  }
  isUser() {
    if (AuthStore.user && AppointmentStore.appointments.length > 0) {
      return <Content />;
    } else if (!AuthStore.user && AppointmentStore.appointments.length > 0) {
      return (
        <Button
          block
          info
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Log in to checkout</Text>
        </Button>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ textAlignVertical: "center", alignSelf: "center" }}>
            SON
          </Text>
        </View>
      );
    }
  }

  isEmpty() {
    const list = AppointmentStore.appointments;
    let content;
    if (list.length > 0) {
      console.log("Appointment List is not empty yeeha!");
      content = list.map((item, index) => (
        <AppointmentItem appointment={item} key={index} />
      ));
      return <List>{content}</List>;
    } else {
      console.log("Appointment List is empty oh no!");
      return <Content />;
    }
  }

  // reservedStuff() {
  //   const list = AppointmentStore.reservedSlots;
  //   let content;
  //   if (list.length > 0) {
  //     AppointmentStore.pastAppointments();
  //     const list2 = AppointmentStore.pendingSlots;
  //     if (list2.length > 0) {
  //       content = list.map((item, index) => (
  //         <AppointmentItem appointment={item} key={index} />
  //       ));
  //
  //       return <List>{content}</List>;
  //     }
  //   } else {
  //     console.log("NO PAST APPOINTMENTS BUD");
  //     return <Content />;
  //   }
  // }

  render() {
    return (
      <Content>
        {this.isEmpty()}
        {this.isUser()}
      </Content>
    );
  }
}

export default observer(AppointmentList);
