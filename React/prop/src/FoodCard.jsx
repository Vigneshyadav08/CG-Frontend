
const FoodCard = (prop) => {
    let {foodData} = prop;
    foodData[0].id = 10;
    console.log(foodData);
    console.log(prop);
  return (
    <div style={{display: "flex",flexDirection: "row"}}>
        {
           foodData.map((f,index)=>(
                <div key = {index} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",padding: 10, margin: 1, borderRadius: 10}}>
                    <img src={f.image} style={{width: 300, height: 300, padding: 0,borderRadius: 10}}></img>
                    <h1 style={{padding: 0, margin: 5}}>{f.name}</h1>
                    <p style={{margin: 5}}>Rs. {f.price}/-</p>
                    <button style={{width: 300,margin: 5}}>Add to Cart</button>
                </div>
           ))
        }
    </div>
  )
}

export default FoodCard
