import React, { Component } from "react";

import { Button, Text, Content } from "native-base";

import { Calendar, CalendarList } from "react-native-calendars";

import SlotList from "../SlotList";
class DayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null
    };
  }
  render() {
    let slot;
    if (this.state.day) {
      const { company } = this.props;
      const days = company.days;

      const test = days.filter(day => {
        console.log("Testing day objects reception: ", day);
        console.log("YOOOOOO", this.state.day.dateString);
        return day.name === this.state.day.dateString;
      });

      console.log("TEST", test);
      return (
        <Content>
          <CalendarList
            horizontal={true}
            pagingEnabled={true}
            onDayPress={day => {
              console.log("selected day", day);
              this.setState({ day: day });
            }}
          />
          <SlotList day={test} key={this.state.day.id} />
        </Content>
      );
    } else {
      const { day } = this.props;

      return (
        <Content>
          <CalendarList
            horizontal={true}
            pagingEnabled={true}
            onDayPress={day => {
              console.log("selected day", day);
              this.setState({ day: day });
            }}
          />
          <Button>
            <Text>stuff with no slots</Text>
          </Button>
        </Content>
      );
    }
  }
}

export default DayItem;
