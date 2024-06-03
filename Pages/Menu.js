import React from "react";
// import CAT233 from '../Images/CAT233.jpg';
import Periperi from "../Detail/Periperi.js";
import Biriyani from "../Detail/Biriyani.js";
import { addToCart,deleteFromCart } from "../Store/CartSlice/cartSlice.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";


function Menu(){

    const cartProduct=useSelector((state) =>state.cart.cartItems)

    const dispatch = useDispatch();

    const addCart =(item) =>{
        dispatch(addToCart(item))
    }

    const deleteCart =(item)=>{
        dispatch(deleteFromCart(item))
    }
    
    const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/all-foods')
          .then((res) => res.json())
          .then((data) => setFoodItems(data));
  }, []);
    
    return(
        <>
        <section className="Menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="title">KFC</h1>
                        <ul>
                            <li>PeriPeri Chicken</li>
                            <li>Bucket Biriyani</li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                            <h3>Peri Peri Chicken</h3>
                            <div className="row">
                            {Periperi.map((item)=>(
                            <div className="col-lg-6">
                            <div id="Peri" class="card" key={item.id}>
                            <img src={item.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.desc}</p>
                         </div>
                         {cartProduct.find(items =>items.id === item.id)?
                        (<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>)
                       :(<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>)
                        }
                         </div>
                         </div>
                                ))}
                        </div>
                        <h3>Bucket Biriyani</h3>
                        <div className="row mt-5">
                            {foodItems.map((item)=>(
                                <div className="col-lg-3">
                                <div class="card" key={item._id}>
                                <img src={item.imgurl} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.desc}</p>
                                <p class="card-text">{item.price}</p>
                            </div>
                            {cartProduct.find(items =>items._id === item._id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                        }
                            </div>
                            </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Menu;