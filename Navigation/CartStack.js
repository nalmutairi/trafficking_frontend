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
      tabBarColor: "#6992F9"
    }
  }
);

export default CartStack;
