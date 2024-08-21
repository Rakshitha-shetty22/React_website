import React from 'react'
import './restrocard.css'
import { CDNURL } from '../../../constants/const';
function Restrocards(props) {
    const { resdata } = props;
    const {
            cloudinaryImageId,
                  name,
                  cuisines,
                  avgRating,
                  deliveryTime,
        } = resdata?.data; 
// The code is taking a props object and extracting resData from it.
// Then, it safely attempts to extract several properties 
// (cloudinaryImageId, name, cuisines, avgRating, costForTwo, and deliveryTime) 
// from resData.data using optional chaining to prevent errors if resData or resData.data is not defined.
  
return (   
    <div className='res-container'>
    
    {/* ---without json
          <div className='imageContainer'>
              <img className='resimage' src={props.resimage} alt="food"/>  
            </div>
            <h3>{props.resName}</h3>
            <h3>{props.cuisine}</h3>
            <h3>{props.star}</h3>
            <h3>{props.time}</h3> 

    ---with json and without props distructure
        <div className='imageContainer'>
          <img className='resimage' src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
            props.resdata.data.cloudinaryImageId 
          } alt='food'/>
        </div>
         <h3>{props.resdata.data.name}</h3>
         <h3>{props.resdata.data.cuisines.join(', ')}</h3>
         <h3>ratings: {props.resdata.data.avgRating}</h3>
         <h3>Time: {props.resdata.data.deliveryTime}minutes</h3> */}

  {/* ---with json and with props distructure */}
        <div className='imageContainer'>
            <img className='resimage' src={ CDNURL.RES_IMG + cloudinaryImageId  } alt='food'/>
        </div>
        <div className='res-info'>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>ratings: {avgRating}</h3>
            <h3>Time: {deliveryTime}minutes</h3>
        </div>
    </div>
    )
  }
export default Restrocards
