import React from 'react'
import Restrocards from './restroCards/Restrocards'
//import { RESLIST } from '../../constants/const'
import { useState,useEffect } from 'react'

import './home.css'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

function Home() {
  const [RestaurantList, setRestaurantList] = useState([]) //it is used to filter, search 
  //const [RestaurantList, setRestaurantList] = useState(RESLIST) can use this also u can c fst this will be rendered then it will be updated with usefect api
  // whenever my data changes react component rerenders. (UI changes)
  const [text, setText] = useState("");
  const [RestaurantListcopy, setRestaurantListcopy] =useState([]); //which is copy of restaurantlist nd used to render on UI

  useEffect(() => {
    fetchdata();
   },[])

  const fetchdata = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //imagine that swiggy api is our BE api.
    const jsondata = await data.json();
    //console.log(jsondata);
    setRestaurantList(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantListcopy(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
 console.log(useState());
  const handleFilter = ()=> {
        const filteredList= RestaurantList.filter((i)  => i.info.avgRating > 4.5)
        setRestaurantListcopy(filteredList)
  }
  const handleFilterSearch = () => {
    const filterSearch = RestaurantList.filter((i) => i.info.name.toLowerCase().includes(text.toLowerCase()))
    //setRestaurantList(filterSearch);   
    //so instead of modifying original restro we create the another state so we can search as many times...
    setRestaurantListcopy(filterSearch);
  }

  //console.log("raksh");  check it will rerender the page as many time state changes.

  //this is conditional rendering using if
  // if(RestaurantList.length === 0){
  //   return <Shimmer/>
  // }

  //this is conditional rendering using ?
  return  RestaurantList.length === 0 ? (
     <Shimmer/>
   ) :(
    <div> 
      <div className='filter'>
        <div className='search'>
          <input type='text' className='searchText' onChange={(e)=>setText(e.target.value)} value={text}></input>
          {/* react will rerender as the value of text changes if write one letter in the input it will rerender the component */}
          <button className='login' onClick={handleFilterSearch}>search</button>
        {/* when we click on the button it will filter out the restro and it will update the listofrestarnt when u update 
    it will trigger the reconcilation proccess body component will be rerendered and rerender with updated value using diff */}
        </div>
        <button className='filterbtn' onClick={handleFilter}>Top rated restaurants</button>
      </div> 
        <div className='restaurant'>
        {
            RestaurantListcopy.map((i) => {
               return <Link to={"/restaurant/"+i.info.id} key={i.info.id}><Restrocards resdata={i} /></Link>
            })
        }
      </div>
    </div>
  )}
export default Home;

//so in line no. 66 here we passing the id of restaurant when restaurant/246 (restaurant/resid) is url
//then our  { path: "/restaurant/:resId", element: <Restaurantmenu/>} <Restaurantmenu/> will rendered
// when <Restaurantmenu/> this is called there we are using the useparams so it will fetch the resId
//then the resId is passed to the link using fetch then that particular page will be fetched.