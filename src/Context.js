import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    cartTotal: 0
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetails = id => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({
      products: tempProducts,
      cart: [...this.state.cart, product]
    });
  };

  increment = id => {
    console.log("this is increment method");
  };
  decrement = id => {
    console.log("this is decrement method");
  };

  removeItem = id => {
    console.log("item removed");
  };

  clearCart = id => {
    this.setState(() => {
      return { cart: [] };
    });
  };

  // addTotal = id => {
  //   let subTotal = 0;
  //   this.state.cart.map(item => (subTotal += item.total));
  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
