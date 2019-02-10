import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../Components/Profile";
import AppointmentList from "../Components/AppointmentList";
const CartStack = createStackNavigator(
  {
    AppointmentList: AppointmentList
  },

  {
    initialRouteName: "AppointmentList",
    navigationOptions: {
      tabBarColor: "#697689"
    }
  }
);

export default CartStack;
