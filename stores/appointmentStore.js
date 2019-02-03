import axios from "axios";
import { decorate, observable, action } from "mobx";

class AppointmentStore {
  constructor() {
    //each appointment is a chosen slot
    this.appointments = [];
    //this.fetchAllAppointments();
  }
  addAppointment(app) {
    const doesExist = this.appointments.find(
      appointment =>
        appointment.date === app.date &&
        appointment.start_time === app.start_time
    );

    if (!doesExist) {
      this.appointments.push(app);
      return true;
    } else {
      return false;
    }
  }

  removeAppointment(app) {
    this.appointments.filter(appointment => appointment !== app);
  }

  // checkout() {
  //   this.appointments.forEach(appointment => {
  //     axios
  //       .post("http://127.0.0.1:8000/slot/" + appointment.id + "/update/")
  //       .catch(err => console.log(err));
  //   });
  // }
}

decorate(AppointmentStore, {
  appointments: observable,
  addAppointment: action,
  removeAppointment: action
});

export default new AppointmentStore();
