import React, { Component } from "react";
import { List } from "native-base";

import CompanyDetail from "../CompanyDetail";
import DayItem from "./DayItem";

class DayList extends Component {
  render() {
    //??
    const days = CompanyDetail.day;
    //??
    console.log("DAYS");
    console.log(days);
    let DayList;
    if (days) {
      DayList = days.map(day => <DayItem day={day} key={day.id} />);
    }

    return <List>{DayList}</List>;
  }
}

export default DayList;
