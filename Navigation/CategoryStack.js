import { createStackNavigator } from "react-navigation";

import CategoryList from "../Components/CategoryList";
import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";

const CategoryStack = createStackNavigator(
  {
    CategoryList: CategoryList,
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail
  },
  {
    initialRouteName: "CategoryList",
    navigationOptions: {
      tabBarColor: "#6992F9"
    }
  }
);

export default CategoryStack;
