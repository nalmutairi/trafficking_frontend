import React, { Component } from "react";

import { ScrollView, View, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
// NativeBase Components
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  List,
  Accordion
} from "native-base";

import { CollapsibleList } from "react-native-collapsible-list";
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";
import AppointmentStore from "../../stores/appointmentStore";

import OrderItem from "./OrderItem";
import SlotItem from "../SlotList/SlotItem";
import SlotList from "../SlotList";

import OrderList from "./OrderList";
// const dataArray = [
//   {
//     title: "Pending Orders",
//     body: <OrderList order={AppointmentStore.pendingSlots} />
//   },
//   {
//     title: "Past Orders",
//     body: <OrderList order={AppointmentStore.pastSlots} />
//   }
// ];
// var Accordion = require("react-native-accordion");
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      past: false,
      phone: "",
      area: "",
      block: "",
      street: "",
      house: "",
      jaada: "",
      user: authStore.user
    };
  }

  componentDidMount() {
    AppointmentStore.fetchUserAppointments();
    console.log("UPDATING CONSOLE");
  }

  pressPending() {
    this.setState({ pending: !this.state.pending });
  }

  pressPast() {
    this.setState({ past: !this.state.past });
  }

  pendingslotsAvailable() {
    if (this.state.pending) {
      console.log("STUFF");
      console.log("Reserved", AppointmentStore.reservedSlots);
      let pendingslots = AppointmentStore.pendingSlots;
      let PendingSlotList;
      if (pendingslots) {
        PendingSlotList = pendingslots.map(slot => (
          <OrderItem order={slot} key={slot.id} />
        ));
      }
      console.log("PEEEE: ", PendingSlotList);
      return PendingSlotList;
    }
  }

  pastslotsAvailable() {
    if (this.state.past) {
      let pastslots = AppointmentStore.pastSlots;
      let PastSlotList;
      if (pastslots) {
        PastSlotList = pastslots.map(slot => (
          <OrderItem order={slot} key={slot.id} />
        ));
      }
      console.log("PAAAA: ", PastSlotList);
      return PastSlotList;
    }
  }
  render() {
    return (
      <ScrollView>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Area</Label>
              <Input
                placeholder="area"
                autoCapitalize="none"
                onChangeText={area => this.setState({ area })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Block</Label>
              <Input
                placeholder="block"
                autoCapitalize="none"
                onChangeText={block => this.setState({ block })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Street</Label>
              <Input
                placeholder="street"
                autoCapitalize="none"
                onChangeText={street => this.setState({ street })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Jaada</Label>
              <Input
                placeholder="jaada"
                autoCapitalize="none"
                onChangeText={jaada => this.setState({ jaada })}
              />
            </Item>
            <Item stackedLabel>
              <Label>House</Label>
              <Input
                placeholder="house"
                autoCapitalize="none"
                onChangeText={house => this.setState({ house })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input
                placeholder="phone"
                autoCapitalize="none"
                onChangeText={phone => this.setState({ phone })}
              />
            </Item>
            <Button
              full
              onPress={
                // () => console.log(this.state)
                () => addressStore.createAddress(this.state)
                // authStore.loginUser(this.state, this.props.navigation)
              }
            >
              <Text>Create Address</Text>
            </Button>
          </Form>
          <TouchableOpacity onPress={() => this.pressPending()}>
            <Text>Pending Slots</Text>
          </TouchableOpacity>
          {this.pendingslotsAvailable()}
          <TouchableOpacity onPress={() => this.pressPast()}>
            <Text>Past Slots</Text>
          </TouchableOpacity>
          {this.pastslotsAvailable()}
        </Content>
      </ScrollView>

      // <Card>
      //   <CardItem>
      //     <Button
      //       danger
      //       onPress={() => authStore.logoutUser(this.props.navigation)}
      //     >
      //       <Text>Logout</Text>
      //     </Button>
      //   </CardItem>
      // </Card>
    );
  }
}
export default observer(Profile);
