import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartTotal: 0,
    cartSubTotal: 0,
    cartTax: 0
  };
  componentDidMount() {
    this.storeProducts();
  }

  storeProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
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

  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.storeProducts();
        this.addTotal();
      }
    );
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      () => {
        this.addTotal();
      }
    );
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProducts = tempCart.find(item => item.id == id);

    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProducts = tempCart.find(item => item.id == id);

    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count == 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeproduct = tempProducts[index];
    removeproduct.inCart = false;
    removeproduct.count = 0;
    removeproduct.total = 0;

    this.setState(
      () => {
        return {
          products: [...tempProducts],
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = id => {
    this.setState(() => {
      return { cart: [] };
    });
  };

  addTotal = id => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = tax + subTotal;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

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
