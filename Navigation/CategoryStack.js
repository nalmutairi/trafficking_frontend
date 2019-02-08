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
    initialRouteName: "CategoryList"
    // defaultNavigationOptions: {
    //   title: "welcome to the inn"
    // }
  }
);

export default CategoryStack;
