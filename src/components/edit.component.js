import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:4000/products/edit/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          detail: response.data.detail,
          cost: response.data.cost,
          unit: response.data.unit,
          classify: response.data.classify,
          amount: response.data.amount,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .post(
        "http://localhost:4000/products/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/index");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Product Info</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>T??n s???n ph???m: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Chi ti???t s???n ph???m</label>
            <input
              type="text"
              className="form-control"
              value={this.state.detail}
              onChange={this.onChangeDetail}
            />
          </div>
          <div>
            <label>Gi?? s???n ph???m: (vn??) </label>
            <br />
            <input
              type="text"
              className="form-control"
              value={this.state.cost}
              onChange={this.onChangeCost}
            />
           <p>
              <label>????n v???</label>

              <select
                className="select"
                value={this.state.unit}
                onChange={this.onChangeUnit}
              >
                <option value="Kg">Kilogam</option>
                <option value="gram">Gram(L???ng)</option>
                <option value="tree">C??y</option>
                <option value="box">H???p</option>
                <option value="qua">Qu???</option>
              </select>

              <label className="phanloai">Ph??n lo???i </label>
              <select
                className="select"
                value={this.state.classify}
                onChange={this.onChangeClassify}
              >
                <option value="vegetable">Rau</option>
                <option value="fish">C??</option>
                <option value="meat">Th???t</option>
                <option value="Hoa qu???">Hoa qu???</option>
                <option value="groceries">H??ng kh??</option>
                <option value="?????c s???n v??ng mi???n">?????c s???n v??ng mi???n</option>
              </select>
            </p>
          </div>
          <div className="form-group">
            <label>S??? l?????ng </label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Product Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
