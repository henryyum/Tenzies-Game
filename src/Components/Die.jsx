import React from "react";
import './Die.css'

export default function Die({value, isHeld, holdDie}){
  const styles = {
    backgroundColor: isHeld? "#59E391" : "white"
  }
  return (
    
    <div onClick={holdDie} style={styles} className="die-container">
      <h1>{value}</h1>
    </div>
   
  )
}