import React, { Component } from "react";
import "./Style.css";
import axios from "axios";
import FilterProduct from "../components/filterProduct";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.products.map(function (object, i) {
      return <FilterProduct obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row"> {this.tabRow()}</div>
        </div>
      </div>
    );
  }
}
export default ProductList;

