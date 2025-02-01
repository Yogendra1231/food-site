

const Card = (props) =>{
     const { resdata } = props ;
     const {name ,cloudinaryImageId ,locality,cuisines,avgRating, sla,costForTwo} = resdata;
    return (
       <div className="res-card m-4 p-4 w-[200px] bg-slate-300 rounded-lg">
        
        <img className="card_img rounded-lg w-60" src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img> 
       
       <h3 className="font-bold py-4 text-lg">{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{sla.deliveryTime} minute</h4>
    </div>

)};

export const withPromotedCard = function (Card){
    return (props)=>{
        return(
        <div>
        <h4 className="absolute bg-black m-3 p-2 rounded-lg white text-white">promoted</h4>
        <Card {...props}/>
        </div>)
        
    }
}

export default Card;