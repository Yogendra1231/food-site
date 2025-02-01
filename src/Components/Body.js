import { useState ,useEffect } from "react";
import Card, {withPromotedCard} from "./Cards"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedCard } from "./Cards";
 

const Body = () =>{
    const [reslist , setreslist] = useState([]);
    const [filterreslist, setfilterreslist] = useState([]);
    const [searchval , setsearchval] = useState("");
    useEffect(()=>{
        fetchdata();
    }, [])
                                                             
    const fetchdata = async ()=>{         
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jason = await data.json();
        
        setreslist(jason?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterreslist(jason?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const PromotedCard = withPromotedCard(Card);  
    const status  = useOnlineStatus();
                  
    if(status== false){
        return <h1>You are offline, Please check the internet connection</h1>
    } 

    return reslist.length===0 ?<Shimmer/> :(
        <div className ="Body px-20">
          
          <div className="filter flex py-4">
           <div className="border border-black ml-3">
          <input type="text" value={searchval} onChange={(e)=>{
                      setsearchval(e.target.value);
          }}></input></div>                             
          <button className="search-btn px-3 mx-2 shadow-lg bg-sky-200 rounded-lg" onClick={()=>{
            
             const result = reslist.filter((restaurant)=>{return restaurant.info.name.toLowerCase().includes(searchval.toLowerCase())});
             setfilterreslist(result);
          
          }}>search restaurant</button>
          <button className="filter-btn px-3 shadow-lg bg-yellow-200 rounded-lg" onClick={()=> {
            const filterlist = reslist.filter((reslist)=>{ return reslist.info.avgRating > 4});
            setfilterreslist(filterlist);
          }}>Toprated restaurant</button></div>
         <div className="card-container flex flex-wrap  ">
            {filterreslist.map((restaurant, index) => <Link key ={index} to={"/restaurant/"+restaurant.info.id}> {restaurant.info.avgRating >4.5 ? (
        <PromotedCard resdata={restaurant.info} />
      ) : (
        <Card resdata={restaurant.info} />
         
      )}</Link>) };
            </div>
        </div>
  
)};


export default Body; 