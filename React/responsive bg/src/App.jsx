import React, { useState } from 'react'

const App = () => {
    let [styles,changeStyle] = useState({
        backgroundColor: null,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    });
    let buttonStyle = {
        border: '1px white',
        backgroundColor: 'transparent',
        fontSize: 50
    }

  return (
    <div style={styles}>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "white"})} style={buttonStyle}>🤍</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "red"})} style={buttonStyle}>❤️</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "yellow"})} style={buttonStyle}>💛</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "black"})} style={buttonStyle}>🖤</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "green"})} style={buttonStyle}>💚</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "violet"})} style={buttonStyle}>💜</button>
        <button onClick={()=>changeStyle({...styles,backgroundColor : "orange"})} style={buttonStyle}>🧡</button>
    </div>
  )
}

export default App
6