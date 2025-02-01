import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Body from "./Components/Body"
import Header from "./Components/Header"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import { About } from "./Components/About";
import { Error } from "./Components/Error";
import { RestaurantManu } from "./Components/RestaurantManu";
import { lazy, Suspense } from "react";
import  UserContext  from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./Components/Cart";
// import Grocery from "./Components/Grocery";
const objcart = {
    "info": {
      "id": "151518",
      "name": "Bakery World",
      "cloudinaryImageId": "mt2aggiscfl3yviatwng",
      "locality": "Parasia Road",
      "areaName": "Parasia Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Ice Cream",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "40363",
      "avgRatingString": "4.5",
      "totalRatingsString": "248",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 12.7,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "12.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-01-06 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹1099",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-c6ced910-8d36-40f6-b500-94f00ef112ba"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      "type": "WEBLINK"
    }
  }

  const Grocery = lazy(() => import("./Components/Grocery"));
 
// const Pn0 = () => <h1>pn0 fucntion component</h1>
// const Pn1 = () => (
//     <div><Pn0/> 
//      <h1>hello everything is going find</h1> </div>

// );

const Applayout = () => (
     <Provider store ={appStore}>
     <UserContext.Provider>
    <div>
       <Header/>
       <Outlet/>

    </div>
    </UserContext.Provider>
    </Provider>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      { path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantManu/>
      },
      {path: "/Grocery",
        element: <Suspense fallback={<h1>loading..</h1>
        
        }><Grocery/></Suspense>,},
        {
          path: "/cart",
          element: <Cart/>,
        }
      
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)