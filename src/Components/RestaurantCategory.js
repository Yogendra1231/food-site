import React from 'react'
import { ItemDetails } from './ItemDetails';
import { useState } from 'react';

export const RestaurantCategory = ({data, showItems, setshowIndex }) => {
   
    
  const settingIndex = ()=> {
         setshowIndex();
  }

  return (
    <div>
        <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg py-4  cursor-pointer"   onClick={settingIndex}     ><div className = "flex justify-between font-bold">{data.title}  <span><button>&#8615;</button> </span></div>
         
       
       
       <div>
           { showItems && <ItemDetails categories= {data?.categories}/>}
       </div>
       
   


        </div>

      

        {/* <div><ItemDetails data={data}/></div> */}
       </div>
  )
}
