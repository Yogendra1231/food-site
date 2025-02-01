import React from 'react'
import { CDN_URL } from '../constants/menuconstant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
export const ItemDetails = (props) => {
   const dispatch = useDispatch();

    const { categories} = props;
    const handleItem= (item)=>{
         dispatch(addItem(item));
    }

  return (
    <div>

<div className="  mx-auto my-5 py-4">
      <ul>
        {categories?.map((category, categoryIndex) => (
          <li key={categoryIndex}>
            <div className ="">
            {category?.itemCards?.map((item, itemIndex) => (
              <div className="p-2  m-2 border-gray-500 border-b-2 text-left flex justify-between" key={itemIndex}>  <div className ="w-9/12"> <div >   <div className="py-2"><span >{item?.card?.info?.name} </span> <span> Rs - {item?.card?.info?.price/100} </span> </div>
               </div> 
              
              <div><p className="text-xs">{item?.card?.info?.description}</p></div>
              
               </div  >
              
               <div className= "w-3/12 ">
               <div className="absolute">
               <button className="bg-black text-white shadow-lg rounded-lg p-2 mx-16" onClick={()=>{handleItem(item)}}>Add +</button>
               </div>
               <img src={CDN_URL + item?.card?.info?.imageId} ></img> </div>
               </div>
              
            ))}</div>
          </li>
        ))}
      </ul>
    </div>




    </div>
  )
}
