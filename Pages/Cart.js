import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { deleteFromCart } from "../Store/CartSlice/cartSlice";

function Cart(){

    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();

    const deleteCart = (item) =>{
        dispatch(deleteFromCart(item));
    };

    return(
      <>
      {cartProducts.map((item)=>(
        <div key={item._id}>
            <h1>{item.title}</h1>
            <img src={item.img}></img>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <button className="btn" onClick={()=>deleteCart(item)}>Delete</button>
        </div>
      
    ))}
      </>
    )
}
export default Cart;