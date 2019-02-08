import React, { Component } from "React";

import styles from "./styles";

import { observer } from "mobx-react";
import { ScrollView, View } from "react-native";

// import CategoryItem from "./CategoryItem";

import CategoryStore from "../../stores/categoryStore";
import CategoryCard from "./CategoryCard";

class CategoryList extends Component {
  render() {
    let categoryCards = CategoryStore.categories.map(
      (incomingCategory, index) => (
        <CategoryCard key={index} category={incomingCategory} />
      )
    );
    return (
      <ScrollView style={{ backgroundColor: "rgba(105, 146, 249, 0.1)" }}>
        <View style={styles.container}>{categoryCards}</View>
      </ScrollView>
    );
  }
}

export default observer(CategoryList);
