import React from "react";

import axios from "axios";

class AppointmentStore {
  constructor() {
    this.days = [];
    this.slots = [];

    this.fetchAllDays();
    this.fetchAllSlot();
  }

  fetchAllDays() {
    axios
      .get("http://104.248.38.127/daylist/")
      .then(res => res.data)
      .then(day => {
        this.days = day;
      })
      .catch(err => console.error(err));
  }

  fetchAllSlots() {
    axios
      .get("http://104.248.38.127/slotlist/")
      .then(res => res.data)
      .then(slot => {
        this.slot = slot;
      })
      .catch(err => console.error(err));
  }
}

decorate(AppointmentStore, { days: observable, slots: observable });

const appointmentStore = new AppointmentStore();

export default appointmentStore;
