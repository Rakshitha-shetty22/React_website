import React from 'react'
import Restrocards from './restroCards/Restrocards'
import { RESLIST } from '../../constants/const'
import { useState } from 'react'

import './body.css'

function Body() {
  const [RestaurantList, setRestaurantList] = useState(RESLIST)
  // whenever my data changes react component rerenders. (UI changes)

  const handleFilter = ()=> {
        const filteredList= RESLIST.filter((i)  => i.data.avgRating > 4)
        setRestaurantList(filteredList)
      }
{console.log("hii1")}

  return (
    <div> 
      <div className='filter'>
        <button className='filterbtn' onClick={handleFilter}>Top rated restaurants</button>
      </div> 
     {/* <div className='restaurant'>
        <Restrocards resName="Manglore donne biryani" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://b.zmtcdn.com/data/pictures/5/19305465/e5eec8e1279458256e32e39f2b7d19e5_featured_v2.jpg"/>
        //so here props are stringsso we pass inside "" or u can also do {""}
        <Restrocards resName="KFC" cuisine="Biryani, North-indian, asian" star="4.2 stars" time="18 minutes" resimage="https://content.jdmagicbox.com/comp/mangalore/k3/0824px824.x824.230223160724.n4k3/catalogue/kfc-konchady-mangalore-restaurants-zyqmtoixm7.jpg"/>
        <Restrocards resName="vanas" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipMGDxYVU6wkVI9bJb6CYa4KFB8no_pRyowwYb8F=s680-w680-h510"/>
        <Restrocards  resName="PALLKHI RESTAURANT" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipNbCmZPqIFZz1BP3q4DcKlBjVCgRBmqhIt4vH96=s680-w680-h510"/>
        <Restrocards resName="machali" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipNOucFMhWIaLKgCZt5f7ppOsL6-7PRSF2t90p1F=s680-w680-h510"/>
        <Restrocards resName="Shetty lunch home" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipP0-rMZWxbBxzTYPVVEFyU2lRtFwQfJmAs5mmNg=s680-w680-h510"/>
      </div>
      <div className='restaurant'>
        <Restrocards  resName="PALLKHI RESTAURANT" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipNbCmZPqIFZz1BP3q4DcKlBjVCgRBmqhIt4vH96=s680-w680-h510"/>
        <Restrocards resName="Manglore donne biryani" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://b.zmtcdn.com/data/pictures/5/19305465/e5eec8e1279458256e32e39f2b7d19e5_featured_v2.jpg"/>
        <Restrocards resName="machali" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipNOucFMhWIaLKgCZt5f7ppOsL6-7PRSF2t90p1F=s680-w680-h510"/>
        <Restrocards resName="vanas" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipMGDxYVU6wkVI9bJb6CYa4KFB8no_pRyowwYb8F=s680-w680-h510"/>
        <Restrocards resName="Shetty lunch home" cuisine="Biryani, North-indian, asian" star="4.5 stars" time="38 minutes" resimage="https://lh3.googleusercontent.com/p/AF1QipP0-rMZWxbBxzTYPVVEFyU2lRtFwQfJmAs5mmNg=s680-w680-h510"/>
        <Restrocards resName="KFC" cuisine="Biryani, North-indian, asian" star="4.2 stars" time="18 minutes" resimage="https://content.jdmagicbox.com/comp/mangalore/k3/0824px824.x824.230223160724.n4k3/catalogue/kfc-konchady-mangalore-restaurants-zyqmtoixm7.jpg"/>
      </div> */}

      {/* with json data */}
       {/* here props are array so we pass inside {} so it by passing in {} tells React to evaluate the
         expression and pass the result to the Restrocards component. 
        <Restrocards resdata={ RESLIST[0] }/>      
        <Restrocards resdata={ RESLIST[1] }/>
        <Restrocards resdata={ RESLIST[2] }/>*/}
      
        {/* to write js use {} */}
        <div className='restaurant'>
        {
            RestaurantList.map((i) => {
               return <Restrocards resdata={i} key={i.data.id} />
            })
        }
      </div>
    </div>
  )}
export default Body;
