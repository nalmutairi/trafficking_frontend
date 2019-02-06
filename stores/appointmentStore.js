import axios from "axios";
import { decorate, observable, action, computed } from "mobx";

const instance = axios.create({
  baseURL: "http:104.248.38.127/"
});

import AuthStore from "./authStore";
class AppointmentStore {
  constructor() {
    //each appointment is a chosen slot
    this.appointments = [];
    this.reservedSlots = [];
    this.pendingSlots = [];
    this.pastSlots = [];
  }

  fetchUserAppointments() {
    if (AuthStore.user) {
      axios
        .get("http://104.248.38.127/slot/list/")
        .then(res => res.data)
        .then(slots => {
          this.reservedSlots = slots;
          console.log("hello reserved", this.reservedSlots);
        })
        .catch(err => console.error(err));
    }
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
    this.appointments = this.appointments.filter(appointment => {
      return appointment.id !== app.id;
    });
    console.log("REMOVE", this.appointments);
  }

  pastAppointments() {
    let q = 0;
    const today = new Date();

    console.log("woooo", this.reservedSlots);
    this.reservedSlots.forEach(appointment => {
      console.log("in appointment woo");
      let date = appointment.date;
      console.log("YEEEEHA", date);
      let time = appointment.start_time;
      let appointmentTime = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7) - 1),
        parseInt(date.slice(8, 10)),
        parseInt(time.slice(0, 2)),
        parseInt(time.slice(3, 5)),
        parseInt(time.slice(6, 8))
      );

      if (appointmentTime > today) {
        this.pendingSlots.push(appointment);
        console.log("ITS BEFORE TODAY", appointment);
      } else if (appointmentTime < today) {
        this.pastSlots.push(appointment);
        console.log("WHAT", appointment);
      }
      q = q + 1;
    });
  }

  checkout(navigation) {
    console.log("CHECKOUT FETCH", this.reservedSlots);
    this.appointments.forEach(appointment => {
      console.log(appointment);
      console.log("USER", AuthStore.user.user_id);
      axios
        .put("http://104.248.38.127/slot/" + appointment.id + "/update/", {
          user: AuthStore.user.user_id
        })
        .then(() => {
          console.log("TRYING TO GO TO PROFILEW");
          navigation.navigate("ProfileScreen");
        })
        .catch(err => console.log(err));
    });

    this.appointments = [];
    this.pastAppointments();
  }
}

decorate(AppointmentStore, {
  appointments: observable,
  pendingSlots: observable,
  pastSlots: observable,
  reservedSlots: observable,
  addAppointment: action,
  removeAppointment: action,
  pastAppointments: action,
  checkout: action
});

export default new AppointmentStore();
