import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import Layout from "../components/products-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";
import Product from "../components/product";
import API from "../../../utils/api";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

function mapStateToProps(state) {
  return {
    productsQuestions: state.questions.products
  };
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showIndicator: false
    };
  }

  static navigationOptions = {
    title: "Estatus de equipo "
  };

  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay elementos" />;
  //renderEmpty = () => <ActivityIndicator size="large" color="#f27b21" />
  itemSeparator = () => <Separator />;

  handleChange(id) {
    this.props.dispatch({
      type: "UPDATE_PRODUCT_STATUS",
      payload: {
        products_id: id
      }
    });
  }

  renderItem = ({ item }) => {
    return <Product {...item} onCheckboxChange={this.handleChange} />;
  };

  saveAudit = () => {
    this.props.navigation.goBack();
  };
  listFooter = () => {
    return (
      <View style={styles.btnSave}>
        <Button
          buttonStyle={styles.boton}
          color="#f27b21"
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Guardar"
          onPress={this.saveAudit}
        />
      </View>
    );
  };
  render() {
    return (
      <Layout title="Status de equipos para apertura Master PRO">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.productsQuestions.preguntas_productos}
          extraData={this.props}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          ListFooterComponent={this.listFooter}
        />
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  btnSave: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  boton: {
    backgroundColor: "#f27b21"
  }
});

export default connect(mapStateToProps)(ProductList);
