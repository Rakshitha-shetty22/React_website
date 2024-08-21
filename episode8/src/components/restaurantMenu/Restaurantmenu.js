import { useEffect, useState } from "react";
import Shimmer from "../../components/home/Shimmer";
import RestaurantMenucard from "./RestaurantMenucard";
import { useParams } from 'react-router-dom'
import { CDNURL } from '../../constants/const'

import "./styles.css";


const Restaurantmenu = () => {
  const [resinfo, setResinfo] = useState("");
  const {resId} = useParams()
  const fetchdata = async () => {
    const data = await fetch( CDNURL.MENU_URL + resId );
    const datajson = await data.json();
    setResinfo(datajson);
  };

  useEffect(() => fetchdata(), []);

  if (!resinfo) {
     return <Shimmer />;
    }
//everytime our ternary is not working becz here when this code run line by line from the line below of this text
//in intial rendering it is not defined because data is not fetched yet so it will give the error
//so we should catch that error using shimmer UI before the line below of this text

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resinfo?.data?.cards[2]?.card?.card?.info ||0;
  //||0 is optional 

  const { minDeliveryTime, maxDeliveryTime } =
    resinfo?.data?.cards[2]?.card?.card?.info.sla || {};

    const itemCards =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  
  return(
    <div className="resinfomenu">
      <div className="resinfo">
        <h1 className="resName">{name}</h1>
        <div className="infoContainer">
          <div className="ratingsrscontainer">
            <h3>
              {avgRatingString}({totalRatingsString})
            </h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <h3>{cuisines}</h3>
          <h3>
            {minDeliveryTime} - {maxDeliveryTime} mins
          </h3>
        </div>
        <div className="resmenu">
        {itemCards.map((i) => {
          return <RestaurantMenucard menu = {i} key={i.card.info.id}/>
        })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
