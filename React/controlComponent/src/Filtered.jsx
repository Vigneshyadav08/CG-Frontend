import React, { useState } from 'react'

const Filtered = () => {
    let [category,changeCategory] = useState('all')
    let products = [
        {name: 'laptop',category: 'electronics'},
        {name: 'mobile',category: 'electronics'},
        {name: 'bottle',category: 'appliances'},
        {name: 'T Shirt', category: 'fashion'}
    ]

    function handleChange(e){
        let {name,value} = e.target;
        changeCategory(value);
    }
  return (
    <div>
      {
        products.filter((i)=>(
            i.category == category || category == 'all'
        )).map((i,index) => 
            <h3 key={index}>{i.name} - {i.category}</h3>
        )
      }
      <input type="text" name="category" id="" placeholder='enter category' value={category} onChange={handleChange}></input>
    </div>
  )
}

export default Filtered
