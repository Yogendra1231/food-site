import { useEffect } from "react"
import { useParams } from "react-router";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCategory } from "./RestaurantCategory";
export const RestaurantManu = () =>{
   const [resInfo , setresInfo] = useState(null);

   const [menuInfo, setmenuInfo] = useState([]);
   const [showIndex ,setshowIndex] = useState(0);

    const {resId} = useParams();
    // console.log(resId);
     useEffect(()=>{
        fetchMenu();
     }, [])

     const fetchMenu = async ()=>{
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}`;
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
        
     }
     if(resInfo === null)return <Shimmer/>;
    //  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const {name , cuisines , costForTwoMessage }  = resInfo?.cards[2]?.card?.card?.info ;

    const nestedMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(nestedMenu);

    return (<div className ="menu text-center">
        <h1 className ="font-bold my-4 text-xl">{name}</h1>
        <p className= "font-bold">{cuisines.join(' ')}- {costForTwoMessage}</p>
        
        <ul>
            {nestedMenu.map((c ,index)=> <li key ={index}><RestaurantCategory data= {c?.card?.card} showItems={index === showIndex? true : false}  setshowIndex = {()=>{setshowIndex(index)}} /></li>)}
        
        </ul>
    </div>)
}