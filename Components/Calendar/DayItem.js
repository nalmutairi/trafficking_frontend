import React, { Component } from "react";

import appointmentStore from "../../stores/AppointmentStore";

class DayItem extends Component {
  render() {
    return <Text>{this.props.day.name}</Text>;
  }
}

export default DayItem;
