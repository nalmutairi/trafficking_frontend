import React, { Component } from "react";
import { List } from "native-base";

import { Content, Calendar, CalendarList } from "react-native-calendars";
import CompanyDetail from "../CompanyDetail";
import DayItem from "./DayItem";

class DayList extends Component {
  render() {
    //??
    const company = this.props.company;
    const days = company.days;
    //??
    // console.log("DAYS");
    // console.log(days);
    let DayList;
    if (days) {
      DayList = days.map(day => <DayItem company={company} key={day.id} />);
    }

    return <DayItem company={company} key={company.id} />;
  }
}

export default DayList;
