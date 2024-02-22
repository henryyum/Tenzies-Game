import React from "react";
import './Die.css'

export default function Die({value, isHeld}){
  const styles = {
    backgroundColor: isHeld? "#59E391" : "white"
  }
  return (
    
    <div style={styles} className="die-container">
      <h1>{value}</h1>
    </div>
   
  )
}