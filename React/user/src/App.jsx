import React, { useState } from 'react';

function App() {
  const [user, setName] = useState(["",""]);
  const userName = "Vignesh";
  const password = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;