import React from "react";
import "./App.css";
import Cart from "./Cart";

class App extends React.Component {
  constructor() {
    super();
    // console.log("inside constructor");
    this.state = {
      products: [
        {
          title: "phone",
          price: 90,
          qty: 1,
          id: 1,
        },
        {
          title: "watch",
          price: 9,
          qty: 1,
          id: 2,
        },
        {
          title: "laptop",
          price: 999,
          qty: 1,
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    // console.log("it's working");
    const index = this.state.products.indexOf(product);
    this.state.products[index].qty++;

    this.setState({
      products: this.state.products,
    });
  };
  handleDecreaseQuantity = (product) => {
    // console.log("it's working");
    const index = this.state.products.indexOf(product);

    if (this.state.products[index].qty === 0) {
      return;
    }

    this.state.products[index].qty--;

    this.setState({
      products: this.state.products,
    });
  };
  handleDeleteItem = (id) => {
    const item = this.state.products.filter((product) => {
      return product.id !== id;
    });

    // console.log("it's working", item);
    this.setState({
      products: item,
    });
  };

  render() {
    // console.log("inside render", typeof(this.state.products));
    return (
      <Cart
        products={this.state.products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

export default App;
