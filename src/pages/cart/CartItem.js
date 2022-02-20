import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./cart-item.css";

export default function CartItem(props) {
  console.log(props);
  const { data } = props;
  const dispatch = useDispatch();
  const id = data._id;
  const [listData, setListData] = React.useState();
  React.useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setListData(res.data);
    });
  }, []);
  //  const [numberQty, setNumberQty] = React.useState(1);
  function removeItemCart() {
    const confirmDel = window.confirm("Bạn muốn xóa sản phầm này?");
    if (confirmDel) {
      dispatch({
        type: "REMOVE_ITEM_CART",
        payload: {
          id: id,
        },
      });
    }
  }
  const onChangeInput = (e, id) => {
    const dataItem = listData?.filter((item) => item._id === id);

    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 1;
    }
    console.log(dataItem[0].cost);

    dispatch({
      type: "UPDATE_CART_ITEM",
      payload: {
        id: id,
        qty: value,
        price: dataItem[0].cost,
      },
    });
  };
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body row">
        <p className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-6">
          <img src={data.img} className="img-item" />
        </p>
        <p className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-6">
          <h4 className="title"> {data.name}</h4>
          <h5 className="cost">
            <small>Giá: </small>
            {data.cost} .000 (vnđ)
          </h5>
          <h5 className="cost">
            <small>Đơn vị: </small>
            {data.unit}
          </h5>
        </p>
        <p className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-6">
          <span className="card-text text-success">
            <small>Số lượng </small>
            {data.qty}
          </span>
          <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
            <input
              type="number"
              id="quantity"
              className="form-control form-blue quantity"
              value= {data.qty}
              onChange={(e) => onChangeInput(e, data._id)}
              min={1}
            />
          </div>
        </p>
        <p className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-6">
          <span className="card-text text-success">
            <small>Nhóm hàng</small>
            {data.classcify}
          </span>
        </p>
      </div>

      <button
        className="btn btn-sm btn-warning float-right"
        onClick={removeItemCart}
      >
        Xóa khỏi giỏ hàng
      </button>
    </div>
  );
}
