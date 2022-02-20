import React, { Component } from "react";
import axios from "axios";
import "./createComponent.css";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);
    this.onChangeClassify = this.onChangeClassify.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      detail: "",
      cost: "",
      unit: "",
      classify: "",
      amount: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDetail(e) {
    this.setState({
      detail: e.target.value,
    });
  }
  onChangeCost(e) {
    this.setState({
      cost: e.target.value,
    });
  }
  onChangeUnit(e) {
    this.setState({
      unit: e.target.value,
    });
  }
  onChangeClassify(e) {
    this.setState({
      classify: e.target.value,
    });
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      detail: this.state.detail,
      cost: this.state.cost,
      unit: this.state.unit,
      classify: this.state.classify,
      amount: this.state.amount,
    };
    axios
      .post("http://localhost:4000/products/add", obj)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      detail: "",
      cost: "",
      unit: "",
      classify: "",
      amount: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <div className="add-product">
          Thêm sản phẩm
          <div> Thêm sản phẩm</div>
          <div> Thêm sản phẩm</div>
          <div> Thêm sản phẩm</div>
          <div> Thêm sản phẩm</div>
        </div>

        <form className="item" onSubmit={this.onSubmit}>
          <div className="form-content">
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />

            <label>Mô tả: </label>
            <br />
            <input
              type="text"
              className="text-box"
              value={this.state.detail}
              onChange={this.onChangeDetail}
            />
            <label>Giá sản phẩm: (vnđ) </label>
            <br />
            <input
              type="text"
              className="form-control"
              value={this.state.cost}
              onChange={this.onChangeCost}
            />
            <p>
              <label>Đơn vị</label>
              <select
                className="select"
                value={this.state.unit}
                onChange={this.onChangeUnit}
              >
                <option value="Kg">Kilogam</option>
                <option value="gram">Gram(Lạng)</option>
                <option value="tree">Cây</option>
                <option value="box">Hộp</option>
                <option value="qua">Quả</option>
              </select>

              <label className="phanloai">Phân loại </label>
              <select
                className="select"
                value={this.state.classify}
                onChange={this.onChangeClassify}
              >
                <option value="vegetable">Rau</option>
                <option value="fish">Cá</option>
                <option value="meat">Thịt</option>
                <option value="Hoa quả">Hoa quả</option>
                <option value="groceries">Hàng khô</option>
                <option value="Đặc sản vùng miền">Đặc sản vùng miền</option>
              </select>
            </p>
            <label>Số lượng</label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
            <button>
              <input
                type="submit"
                value="Thêm sản phẩm"
                className="btn btn-primary"
              />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
