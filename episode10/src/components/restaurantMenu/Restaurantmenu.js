import Shimmer from "../../components/home/Shimmer";
import RestaurantMenucard from "./RestaurantMenucard";
import { useParams } from 'react-router-dom'
import useFetchinfo from '../../hook/useFetchinfo'



const Restaurantmenu = () => {
  const {resId} = useParams()
  
  const resinfo = useFetchinfo(resId);

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
    <div className="">
      <div className="flex items-center flex-col">
        <h1 className="flex w-full justify-center font-bold text-4xl mb-4">{name}</h1>
        <div className="border-2 p-[20px] w-[32%] shadow-md rounded-md leading-6 mb-[25px]">
          <div className="flex justify-between w-1/2">
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
        <div className="flex flex-col items-center mx-10">
        {itemCards.map((i) => {
          return <RestaurantMenucard menu = {i} key={i.card.info.id}/>
        })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
