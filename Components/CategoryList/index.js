import React, { Component } from "React";

import styles from "./styles";

import { observer } from "mobx-react";
import { List, Text, Thumbnail } from "native-base";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";

// import CategoryItem from "./CategoryItem";

import CategoryStore from "../../stores/categoryStore";

class CategoryList extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {CategoryStore.categories.map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => {}}
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
          })}
        </View>
      </ScrollView>
    );
  }
}

export default observer(CategoryList);
