import React, { Component } from "react";
import styles from "./styles";

import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  ImageBackground
} from "react-native";
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
        <ImageBackground
          source={{
            uri: "https://www.fg-a.com/wallpapers/white-marble-2-2018.jpg"
          }}
          imageStyle={{ borderRadius: 30 }}
          style={[
            {
              width: "100%",
              height: "100%"
            },
            styles.item
          ]}
        >
          <Thumbnail
            square
            source={{
              uri: category.pic
            }}
          />
          <Text style={styles.itemTitle}>{category.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CategoryCard);
