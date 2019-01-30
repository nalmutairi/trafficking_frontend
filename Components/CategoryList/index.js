import React, { Component } from "React";

import { observer } from "mobx-react";
import { List, Text } from "native-base";

import CategoryItem from "./CategoryItem";

import CategoryStore from "../../stores/categoryStore";

class CategoryList extends Component {
  render() {
    console.log(CategoryStore.categories);
    const categories = CategoryStore.categories;
    let CategoryList;

    if (categories) {
      CategoryList = categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ));
    }

    return <List>{CategoryList}</List>;
  }
}

export default observer(CategoryList);
