import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Components/Die.jsx'

function App() {

  const styles = {
    backgroundColor: "#59E391"
  }
  const [dice, setdice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if(allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])

  function generateNewDice(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function holdDice(id){
    setdice(oldDice => oldDice.map(die => {
      return die.id === id? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die => <Die
    key={die.id} 
    holdDie={() => holdDice(die.id)} 
    value={die.value} 
    isHeld={die.isHeld}/>)

  function allNewDice(){
    let randomArray = []
    for (let i = 1; i < 11; i++){
      randomArray.push(generateNewDice())
    }
    return randomArray

  }

  function rollDice(){
    if (!tenzies) {
      setdice(oldDice => oldDice.map((die) => {
        return die.isHeld? die : generateNewDice()
      }))
    } else {
      setTenzies(false)
      setdice(allNewDice())
    }
  }

  return (
    <>
    <main>
      <div className="container">
      {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="die-wrapper">
     {diceElements}
      </div>

      <button onClick={rollDice}className="tenzies-btn">{tenzies? "New Game" : "Roll"}</button>
    </div>

    </main>


      
    </>
  )
}

export default App
