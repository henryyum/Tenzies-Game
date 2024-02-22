import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Components/Die.jsx'

function App() {

  const styles = {
    backgroundColor: "#59E391"
  }
  const [dice, setdice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld}/>)

  function allNewDice(){
    let randomArray = []
    for (let i = 1; i < 11; i++){
      randomArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false})
    }
    return randomArray

  }

  function rollDice(){
    setdice(allNewDice)
  }

  return (
    <>
    <main>
      <div className="container">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="die-wrapper">
     {diceElements}
      </div>

      <button onClick={rollDice}className="tenzies-btn">Roll</button>
    </div>

    </main>


      
    </>
  )
}

export default App
