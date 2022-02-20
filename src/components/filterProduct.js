import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import "./filterProduct.css";
import axios from 'axios';
function FilterProduct(props) {
 const [listCart, setListCart] = React.useState([]);
   const dispatch = useDispatch();
   const id = props.obj._id;
   const [listData, setListData] = React.useState();
	 React.useEffect(()=>{
	  axios.get('http://localhost:4000/products')
	  .then((res)=>{
		setListData(res.data)
	  })
	 },[])
  function addProductToCart(e){
    const data = listData.filter((item)=>item._id === id)
    e.preventDefault();
    dispatch({
      type:'ADD_TO_CART',
      payload:{
        id: id,
        qty: 1,
        price: data[0].cost,
      }
    })
  }
  // React.useEffect(()=>{
  //     localStorage.setItem('listCart', list)
  //  },[list])

  
    
    return (
      <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-6 items">
        <form className="contentProduct border-item">
            <div >
            <p className="Product"> {props.obj.name} </p>
          <p>
            <img src={props.obj.img} className="img-item" />
          </p>
          <p className="title"> {props.obj.detail}</p>
          <p className="cost"> Giá sản phẩm :   {props.obj.cost}.000 (vnđ)</p>
          <p className=""> Đơn vị:   {props.obj.unit}</p>
          <p className="group">Nhóm hàng:<span> {props.obj.classify}</span></p>
          <p className="card-text"><small>Số lượng:  {props.obj.amount} </small>{props.obj.qty}</p>
          {props.obj.amount > 0 ? (
            <div>
              <button>
                <input
                  type="submit"
                  value="Mua hàng"
                  className="btn btn-primary"
                  onClick={addProductToCart}
                />
              </button>
            </div>
          ) : (
            <p className="text-danger"> Sản phẩm này đã hết! </p>
          )}
            </div>
         
        </form>
      </div>
    );
  }

export default FilterProduct;
