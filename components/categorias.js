import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

function CategoriaProductos(props) {
  return (
    <View style={styles.container}>
      {Object.keys(props.list).map((key, i) => {
        return (
          <View style={styles.bloque} key={`${i}-capitulo`}>
            <Text style={styles.capitulo}>{props.list[key].title}</Text>
            <Pregunta bloque={props.list[key].preguntas_Check} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  capitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#777777",
    padding: 10
  }
});

export default CategoriaProductos;
