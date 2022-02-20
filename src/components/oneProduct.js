import React from "react";
// import { Link } from "react-router-dom";
import "./oneProduct.css";
import {useHistory} from 'react-router-dom';
function OneProduct(props){
 const history = useHistory();
function checkProduct(){
  localStorage.setItem('itemProduct', props.obj._id)
  console.log(props.obj._id)
  history.push('/cart')
  alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!")
}


    return (
      <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-6 items">
        <div className="border-item">
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
                  onClick={checkProduct}
                />
              </button>
            </div>
          ) : (
            <p className="text-danger"> Sản phẩm này đã hết! </p>
          )}
        </div>
      </div>
    );
  }


export default OneProduct;
