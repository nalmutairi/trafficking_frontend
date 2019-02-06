import { createStackNavigator } from "react-navigation";

import AppointmentList from "../Components/AppointmentList";
const CartStack = createStackNavigator(
  {
    AppointmentList: AppointmentList
  },

  {
    initialRouteName: "AppointmentList"
  }
);

export default CartStack;
