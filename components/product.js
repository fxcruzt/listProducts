import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { CheckBox } from "react-native-elements";

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCheckboxChange(e);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.cover}
            source={{
              uri: this.props.imagen
            }}
          />
        </View>
        <View style={styles.right}>
          <CheckBox
            onPress={this.handleChange.bind(this, this.props.id)}
            key={this.props.index}
            style={styles.check}
            size={30}
            checked={this.props.stock}
            checkedColor="#f37a1f"
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.title}>{this.props.modelo}</Text>

          <Text style={styles.rating}>{this.props.nombre}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: "contain"
  },
  genero: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  generoText: {
    color: "white",
    fontSize: 11
  },
  right: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#44546b"
  },
  year: {
    backgroundColor: "#f37a1f",
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: "white",
    fontSize: 11,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-start"
  },
  rating: {
    color: "#6b6b6b",
    fontSize: 14,
    fontWeight: "bold"
  },
  check: {}
});

export default Product;
