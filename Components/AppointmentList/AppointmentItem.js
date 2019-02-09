import React, { Component } from "react";

import {
  Text,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Card,
  Content,
  CardItem
} from "native-base";
//
import AppointmentStore from "../../stores/appointmentStore";
import styles from "./style";
import AddressPicker from "./AddressPicker";
class AppointmentItem extends Component {
  render() {
    const { appointment } = this.props;

    let dateFormatted = new Date(appointment.date);

    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>{appointment.company}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Date: {dateFormatted.toString().substring(0, 15)}</Text>
              <Text>
                Time: {appointment.start_time} - {appointment.end_time}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <AddressPicker />
          </CardItem>
          <CardItem footer bordered>
            <Button
              style={styles.removeButton}
              block
              light
              onPress={() => AppointmentStore.removeAppointment(appointment)}
            >
              <Text>Remove</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default AppointmentItem;
