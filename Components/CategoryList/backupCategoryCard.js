import React from "react";
import styles from "./styles";

import { TouchableOpacity } from "react-native";
import { Text, Thumbnail } from "native-base";

import { withNavigation } from "react-navigation";

CategoryCard = props => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        props.navigation.navigate("CompanyList", {
          category: props.category.name
        })
      }
    >
      <Thumbnail
        source={{
          uri:
            "http://icons.iconarchive.com/icons/atyourservice/service-categories/256/Cleaning-icon.png"
        }}
      />
      <Text style={styles.itemTitle}>{props.category.name}</Text>
    </TouchableOpacity>
  );
};
export default withNavigation(CategoryCard);
