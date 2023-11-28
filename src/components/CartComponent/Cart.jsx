import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
const Cart = () => {

  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0
    products.forEach((item)=>( total+=item.quantity*item.price))
    return total.toFixed(2)
  }

    // const data = [ {
    //     id: 1,
    //     img: "https://images.pexels.com/photos/5490301/pexels-photo-5490301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     img2: "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     title: "Bedroom",
    //     desc:"Beedrom build with wood and a lot of passion",
    //     isNew: true,
    //     oldPrice: 19,
    //     price: 12,
    //   },
    //   {
    //     id: 2,
    //     img: "https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     title: "Sofa",
    //     desc:"On of our most loving sofas ",
    //     isNew: true,
    //     oldPrice: 19,
    //     price: 12,
    //   }
    // ]

  return (
    <div className='cart'>
        <h1></h1>
        {products?.map(item=>(
            <div className='item' key={item.id}> 
                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>{item.quantity}  x {item.price}</div>

                </div>
                <DeleteOutlineIcon className="delete" onClick={()=> dispatch(removeItem(item.id))}/>
            </div>
        ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>€{totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={()=> dispatch(resetCart())}>Reset</span>
    </div>
  )
}

export default Cart