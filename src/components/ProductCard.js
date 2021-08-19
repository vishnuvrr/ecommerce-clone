import React from "react";

export default function ProductCard(props) {
  let imageURL = "https://via.placeholder.com/150x150";
  console.log(props.productData);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card" style={{margin:"10px" ,textAlign:"center"}}>
        <img src={imageURL} alt="Book"></img>
        <div className="card-body">
          <h5 className="card-title">{props.productData.productName}</h5>
          <h5>{props.productData.price}</h5>
          <button className={`btn btn-outline-dark ${props.productData.cart ? "disabled":""}  `} onClick={()=>props.addProductToCart(props.productPageId,props.productData.ID)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
