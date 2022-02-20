import React from "react";
import CartItem from "./CartItem";
// import { getCartProducts } from "../../repository";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";

import './cart.css';
import axios from 'axios';
function Cart(){
   const dispatch = useDispatch();
   const lists = useSelector(state => state.cart.lists)
   const [listData, setListData] = React.useState();
   React.useEffect(()=>{
    axios.get('http://localhost:4000/products')
    .then((res)=>{
      setListData(res.data)
    })
   },[])
   const listIdCart = lists.map(item => {
     return item.id
   })
   const listDataCart = listData?.filter(item =>listIdCart.includes(item._id))
   console.log(lists)
   const [total, setTotal] = React.useState(0);
   let totalprice = lists.reduce((a,c)=> a + c.qty * c.price, 0);
   console.log(lists)
    console.log(listData)
    function dellAll(){
      dispatch({
        type:"DELL_CART"
      })
    }
    return (
      <div className="container">
        <h3 className="card-title">
          Sản phẩm trong giỏ hàng của bạn
        </h3>
        {listDataCart?.map((item) => (
          <CartItem data={item} key={item._id}/>
        ))}
        {listDataCart?.length ? (
          <div>
            <h4>
              <small className="total">Tổng tiền các sản phẩm:</small>
              <span className="float-right text-primary ">{totalprice} .000 (vnđ  )</span>
            </h4>
            <hr />
          </div>
        ) : (
          ""
        )}
        {!listDataCart?.length ? (
          <h3 className="text-warning">
            Không có sản phẩm nào trong giỏ hàng!
          </h3>
        ) : (
          ""
        )}
        <Link to="/product">
          <button className="btn btn-success float-right">Mua thêm sản phẩm</button>
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={dellAll}
          style={{ marginRight: "10px" }}
        >
          Xóa hết sản phẩm đang có!
        </button>
      
        <br />
        <br />
        <br />
      </div>
    );
  }

export default Cart;
