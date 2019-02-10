import React, { Component } from "react";
import { withNavigation } from "react-navigation";
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
  Accordion,
  Left,
  Thumbnail
} from "native-base";

import { CollapsibleList } from "react-native-collapsible-list";
import AuthStore from "../../stores/authStore";
import AddressStore from "../../stores/addressStore";
import AppointmentStore from "../../stores/appointmentStore";

import OrderItem from "./OrderItem";
import SlotItem from "../SlotList/SlotItem";
import SlotList from "../SlotList";
import AddressList from "./AddressList";
import OrderList from "./orderList";
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
      address: false,
      phone: "",
      area: "",
      block: "",
      street: "",
      house: "",
      jaada: "",
      user: AuthStore.user
    };
    AddressStore.fetchAddresses();
  }

  componentDidMount() {
    AppointmentStore.fetchUserAppointments();
  }

  pressPending() {
    this.setState({ pending: !this.state.pending });
  }

  pressPast() {
    this.setState({ past: !this.state.past });
  }

  pressAddress() {
    this.setState({ address: !this.state.address });
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

      if (PendingSlotList.length > 0) {
        return PendingSlotList;
      } else {
        return <Text>No Pending Orders</Text>;
      }
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
      if (PastSlotList.length > 0) {
        return PastSlotList;
      } else {
        return <Text>No Past Orders</Text>;
      }
    }
  }

  address() {
    if (this.state.address) {
      if (AddressStore.addresses) {
        console.log("WE HAVE", AddressStore.addresses);
        return (
          <Content>
            <Button
              block
              info
              onPress={() => this.props.navigation.navigate("AddressForm", {})}
            >
              <Text>Add Another Address</Text>
            </Button>
            <AddressList address={AddressStore.addresses} />
          </Content>
        );
      } else {
        return (
          <Button
            block
            info
            onPress={() => this.props.navigation.navigate("AddressForm", {})}
          >
            <Text>Add another Address</Text>
          </Button>
        );
      }
    }
  }
  render() {
    console.log("USER", AuthStore.user);
    return (
      <ScrollView>
        <Content />
        <Button
          full
          danger
          onPress={() => AuthStore.logoutUser(this.props.navigation)}
        >
          <Text>LOG OUT</Text>
        </Button>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://recap-project.eu/wp-content/uploads/2017/02/default-user-500x500.jpg"
            }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </Left>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          Welcome {AuthStore.user.username}
        </Text>
        <Button block light onPress={() => this.pressAddress()}>
          <Text>My Addressess</Text>
        </Button>
        {this.address()}
        <Content>
          <Button block light onPress={() => this.pressPending()}>
            <Text>Pending Slots</Text>
          </Button>
          {this.pendingslotsAvailable()}
          <Button block light onPress={() => this.pressPast()}>
            <Text>Past Slots</Text>
          </Button>
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
export default withNavigation(observer(Profile));
