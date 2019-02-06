import React, { Component } from "react";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Text, List, Button, Content, Image, Thumbnail } from "native-base";

import AppointmentStore from "../../stores/appointmentStore";
import AuthStore from "../../stores/authStore";

import AppointmentItem from "./AppointmentItem";
import Checkout from "../Checkout";

class AppointmentList extends Component {
  isUser() {
    if (AuthStore.user && AppointmentStore.appointments.length > 0) {
      return <Checkout navigation={this.props.navigation} />;
    } else if (!AuthStore.user) {
      return (
        <Button onPress={() => this.props.navigation.navigate("Login")}>
          <Text>Log in to checkout</Text>
        </Button>
      );
    }
  }

  isEmpty() {
    const list = AppointmentStore.appointments;
    let content;
    console.log("LIST", list);
    if (list.length > 0) {
      console.log("im in list");
      content = list.map((item, index) => (
        <AppointmentItem appointment={item} key={index} />
      ));

      return <List>{content}</List>;
    } else {
      console.log("im not in list");
      return (
        <Content>
          <Text>IM TIRED</Text>
          <Thumbnail
            source={{
              uri:
                "https://pngimage.net/wp-content/uploads/2018/05/empty-cart-png-6.png"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </Content>
      );
    }
  }
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
