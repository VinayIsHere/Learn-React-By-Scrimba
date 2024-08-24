import React from "react"
import {nanoid} from "nanoid"
import Dice from "./components/Dice";
import './tenzies.css'
import Confetti from "react-confetti"

function Tenzies(){
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function holdDice(id){
        setDice(prevDice => prevDice.map(oldDice => {
            return {
                ...oldDice,
                isHeld:(oldDice.id === id) ? !oldDice.isHeld: oldDice.isHeld
            }
        }))
    }

    function rollDice(){

        if(!tenzies){
            setDice(
                prevDice => prevDice.map(
                    dice => {
                        return dice.isHeld
                        ? dice
                        :  {...dice, value: Math.ceil(Math.random() * 6)}
                    }
                )
            )
        }
        else{
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    const [dice, setDice]= React.useState(allNewDice())
    const [tenzies, setTenzies]= React.useState(false);

    const diceElements= dice.map(
        dice => {
            return <Dice 
                key= {dice.id} 
                digit={dice.value} 
                isHeld={dice.isHeld} 
                handleClick= {() => holdDice(dice.id)}
            />
        }    
    )
    
    React.useEffect(() => {
        
        let firstValue= dice[0].value
        setTenzies(dice.every(d => (d.isHeld === true && d.value === firstValue)))

        tenzies ? console.log("you won") : console.log("try again")
    }
    , [dice])

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className="diceContainer">
                {diceElements}
            </div>

            <button className="rollButton" onClick={rollDice}>
                    {tenzies ? `New Game` : `Roll`}
            </button>
        </main>
    )
}

export default Tenzies;