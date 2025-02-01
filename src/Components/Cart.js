import { useDispatch, useSelector } from "react-redux"
import { CDN_URL } from "../constants/menuconstant";
import { clearCut } from "../utils/cartSlice";

export const Cart = ()=>{
   const dispatch = useDispatch();
   const itemList = useSelector((store)=> store.cart.items);

   const handleClick =()=>{
      dispatch(clearCut());
   }
  
  return (
     <div  >
      
       <div className="font-bold text-center text-2xl m-3"> Cart </div>
       <div className="font-bold flex justify-center m-5"> <button className= "font-bold text-center p-2 text-white bg-black " onClick={()=>handleClick()}>Clear</button></div>
            <div className= "w-6/12 mx-auto">
                {itemList.map((item, itemIndex) => (
                  <div className="p-2  m-2 border-gray-500 border-b-2 text-left flex justify-between" key={itemIndex}>  <div className ="w-9/12"> <div >   <div className="py-2"><span >{item?.card?.info?.name} </span> <span> Rs - {item?.card?.info?.price/100} </span> </div>
                   </div> 
                  
                  <div><p className="text-xs">{item?.card?.info?.description}</p></div>
                  
                   </div  >
                  
                   <div className= "w-3/12 ">
                   <div className="absolute">
                   <button className="bg-black text-white shadow-lg rounded-lg p-2 mx-16" >Add +</button>
                   </div>
                   <img src={CDN_URL + item?.card?.info?.imageId} ></img> </div>
                   </div>
                  
                ))}</div></div>
  )
}