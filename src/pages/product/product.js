import React from "react";
import ProductList from "../../components/productList";
import Footer from "../footer/footer";
import "./product.css";
function Product() {
  return (
    <>
    {/* <Slideshow/> */}
      <div className="container">
        <ProductList />
        {/* <Animation /> */}
      </div>
      <Footer />
    </>
  );
}
export default Product;