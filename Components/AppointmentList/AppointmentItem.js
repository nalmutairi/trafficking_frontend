import React, { Component } from "react";

import { View } from "react-native";
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
  constructor(props) {
    super(props);
    this.state = {
      confirm: false
    };
  }

  confirm(appointmentID, address) {
    this.setState({ confirm: true });
    AppointmentStore.confirmAppointment(appointmentID, address);
  }
  render() {
    const { appointment } = this.props;
    console.log("APPOINTMENT", appointment);
    let dateFormatted = new Date(appointment.date);

    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <View>
              <Text style={{ textAlign: "left" }}>{appointment.company}</Text>
              <Text style={{ textAlign: "right" }}>
                {appointment.companyprice}
              </Text>
            </View>
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
            <AddressPicker appointment={appointment} />
          </CardItem>

          {!this.state.confirm ? (
            <CardItem footer bordered>
              <Button
                style={styles.removeButton}
                block
                light
                onPress={() =>
                  AppointmentStore.removeAppointment(
                    appointment,
                    appointment.id
                  )
                }
              >
                <Text>Remove</Text>
              </Button>
            </CardItem>
          ) : (
            <Text>Confirmed</Text>
          )}
        </Card>
      </Content>
    );
  }
}

export default AppointmentItem;
