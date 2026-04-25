import React, { useState } from 'react'

const App = () => {
    let items = {
        mobile:0,
        laptop:0,
        Keychain:0,
        TotalItems: 0
    };
    let [cart,addItems] = useState(items);
    console.log(cart);
  return (
    <div>
      <h1>🛒</h1>
      <button onClick={()=>addItems({mobile:cart.mobile++,TotalItems:cart.TotalItems++,...cart})}>Mobile - {cart.mobile}</button>
      <br></br>
      <button onClick={()=>addItems({laptop:cart.laptop++,TotalItems:cart.TotalItems++,...cart})}>Laptop - {cart.laptop}</button>
      <br />
      <button onClick={()=>addItems({Keychain:cart.Keychain++,TotalItems:cart.TotalItems++,...cart})}>Keychain - {cart.Keychain}</button>
      <br />

      <h3>Total Items: {cart.TotalItems}</h3>
    </div>
  )
}

export default App
