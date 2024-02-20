import React from "react";
import './Die.css'

export default function Die({value}){
  return (
    <>
    <div className="die-container">
      <h1>{value}</h1>
    </div>
    </>
   
  )
}