import React, { Component } from "react";
import styles from "./styles";

import { TouchableOpacity } from "react-native";
import { Text, Thumbnail } from "native-base";

import { withNavigation } from "react-navigation";

class CategoryCard extends Component {
  constructor(props) {
    super(props);
  }
  handlePress() {
    this.props.navigation.navigate("CompanyList", {
      category: this.props.category.name
    });
  }
  render() {
    const { category } = this.props;
    // the above line is equivalent to const category = this.props.category

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.handlePress(category);
        }}
      >
        <Thumbnail
          source={{
            uri:
              "http://icons.iconarchive.com/icons/atyourservice/service-categories/256/Cleaning-icon.png"
          }}
        />
        <Text style={styles.itemTitle}>{category.name}</Text>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CategoryCard);
