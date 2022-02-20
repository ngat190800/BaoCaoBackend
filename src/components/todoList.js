import React from "react";
import "./todoList.css";
 
function TodoList(props) {

  const { todo } = props;
  
  return (
    <div className="row">
      {todo.map((todo, idx) => {
        return (
          <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-6 item" key={idx}>
            <img className="oneImg" src={todo.Img} />
            <div className="start-product-fruit-main">
              <div className="start-product-fruit-name">
                <h4 class="card-title">{todo.text}</h4>
              </div>
              <div className="start-product-fruit-price">{todo.cost}</div>
              <p class="card-text">{todo.detail}</p>
              <button  className="button-effect">Xem chi tiết</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
