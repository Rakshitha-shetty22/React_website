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
        } = resdata?.info || 0;
// The code is taking a props object and extracting resData from it.
// Then, it safely attempts to extract several properties 
// (cloudinaryImageId, name, cuisines, avgRating, costForTwo, and deliveryTime) 
// from resData.data using optional chaining to prevent errors if resData or resData.data is not defined.
  
return (   
    <div className='res-container'>
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
 