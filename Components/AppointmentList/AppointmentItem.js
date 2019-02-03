import React, { Component } from "react";

import { Text, ListItem, Left, Body, Right, Button } from "native-base";
//
import AppointmentStore from "../../stores/appointmentStore";

class AppointmentItem extends Component {
  render() {
    const { appointment } = this.props;
    return (
      <Text>
        {appointment.date} - {appointment.start_time} - {appointment.end_time}
      </Text>
    );
  }
}

export default AppointmentItem;
