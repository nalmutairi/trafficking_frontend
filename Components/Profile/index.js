import React, { Component } from "react";

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
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";
import AppointmentStore from "../../stores/appointmentStore";

import SlotItem from "../SlotList/SlotItem";
import SlotList from "../SlotList";
const dataArray = [
  {
    title: "Pending Orders",
    content: <SlotList slot={AppointmentStore.pendingSlots} />
  },
  {
    title: "Past Orders",
    content: <SlotList slot={AppointmentStore.pastSlots} />
  }
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      area: "",
      block: "",
      street: "",
      house: "",
      jaada: "",
      user: authStore.user
    };
    AppointmentStore.pastAppointments();
  }
  render() {
    console.log(authStore.user);
    console.log("APPOINTMENT PAST: ", AppointmentStore.pendingSlots);
    let slots = AppointmentStore.pendingSlots;
    let SlotList;
    if (slots) {
      SlotList = slots.map(slot => <SlotItem slot={slot} key={slot.id} />);
    }
    return (
      <Container>
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

          <List>{SlotList}</List>
        </Content>
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </Content>
      </Container>

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
