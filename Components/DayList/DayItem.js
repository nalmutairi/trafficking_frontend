import React, { Component } from "react";

import { Text, Content } from "native-base";
import CompanyDetail from "../CompanyDetail";

class DayItem extends Component {
  render() {
    const { day } = this.props;

    return <Text>{day.opening_time}</Text>;
  }
}

export default DayItem;
