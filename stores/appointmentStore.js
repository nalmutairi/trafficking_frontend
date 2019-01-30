import axios from "axios";
import { decorate, observable } from "mobx";

class AppointmentStore {
  constructor() {
    this.appointments = [];
    this.fetchAllAppointments();
  }

  fetchAllAppointments() {
    axios
      .get("http://104.248.38.127/appointmentlist/")
      .then(res => res.data)
      .then(appointments => {
        this.appointments = appointments;
      })
      .catch(err => console.error(err));
  }
}

decorate(AppointmentStore, {
  appointments: observable
});

export default new AppointmentStore();
