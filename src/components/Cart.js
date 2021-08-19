import React from 'react'

export default function Cart(props) {


  return (
    <div id="cart">
      <table className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
      props.productCartData.map((productData,index)=>
      {
        return(
          <tr>
            <td>{index+1}</td>
            <td>{productData.productName}</td>
            <td>{productData.price}</td>
            <td><button type="button" className="btn-close" aria-label="Close" onClick={()=>props.removeProductFromCart(index,productData.ID)}></button></td>
          </tr>
        )
      })
    }
  </tbody>
  <tfoot>
    <tr>
      <th>Total:</th>
      <th>${props.productTotal}</th>

    </tr>
   
  </tfoot>
</table>

    </div>
  )
}
