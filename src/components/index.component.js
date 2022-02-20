import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
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
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">
          <div className="add-product">
            Danh sách mặt hàng trong cửa hàng
            <div> Danh sách mặt hàng trong cửa hàng</div>
            <div> Danh sách mặt hàng trong cửa hàng</div>
            <div> Danh sách mặt hàng trong cửa hàng</div>
            <div> Danh sách mặt hàng trong cửa hàng</div>
          </div>
        </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Mô tả chi tiết</th>
              <th>Giá</th>
              <th>Đơn vị </th>
              <th>phân loại</th>
              <th>Ngày thu hoạch</th>
              <th colSpan="2">cập nhật</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
