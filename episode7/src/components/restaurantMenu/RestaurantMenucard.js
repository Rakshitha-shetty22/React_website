import React from "react";
import { CDNURL } from "../../constants/const";

const RestaurantMenucard = (props) => {
  const { menu } = props;
  const { name, price, description, imageId } = menu?.card?.info || 0;
  //const { menu } = props; - This line extracts the menu property from the props object. It's a shorthand for const menu = props.menu;.
  //const { name, price, description, imageId } = menu?.card?.info; - This line extracts name, price, description, and imageId from menu?.card?.info.
  const { rating, ratingCountV2 } =
    menu?.card?.info?.ratings?.aggregatedRating || 0;
  
    return (
    <div className="restinfoContainer">
      <div className="restinfo">
        <h3>{name}</h3>
        <h4>Rs {price / 100}</h4>
        {rating !== undefined && ratingCountV2 !== undefined && (
          <h4>
            {rating} ({ratingCountV2})
          </h4>
        )}
        {/* if rating is not undefined then it checks another cndtn if that also true then it goes last condition */}
        <p>{description}</p>
      </div>
      <div className="restimage">
        <img src={CDNURL.RESMENUIMG + imageId} alt="food"/>
        
      </div>
    </div>
  );
};

export default RestaurantMenucard;
