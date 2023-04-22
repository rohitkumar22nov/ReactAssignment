import React, { useEffect, useState } from 'react'
import CompChoice from './CompChoice'
import Score from './Score';

function UserChoice() {

    const [compAnswer, setCompAnswer] = useState('');
    const [userChoice, setUserChoice] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [winner, setWinner] = useState('');


    useEffect(() => {


        if ((userChoice === 'Scissor' && compAnswer === 'Paper') ||
            (userChoice === 'Paper' && compAnswer === 'Rock') ||
            (userChoice === 'Rock' && compAnswer === 'Scissor')) {

            return (setUserScore(userScore + 2),
                setCounter(counter + 1));
        } else if ((compAnswer === 'Scissor' && userChoice === 'Paper') ||
            (compAnswer === 'Paper' && userChoice === 'Rock') ||
            (compAnswer === 'Rock' && userChoice === 'Scissor')) {

            return (setCompScore(compScore + 2),
                setCounter(counter + 1));
        } else if ((userChoice === 'Rock' && compAnswer === 'Rock') ||
            (userChoice === 'Paper' && compAnswer === 'Paper') ||
            (userChoice === 'Scissor' && compAnswer === 'Scissor')) {
            return (setUserScore(userScore + 1),
                setCompScore(compScore + 1),
                setCounter(counter + 1)
            )

        }

    }, [userChoice, compAnswer])


    function reset() {
        let drop = document.getElementById('dropdown');
        drop.selectedIndex = 0;
    }


    function getCompAnswer() {
        let arr = ['Rock', 'Paper', 'Scissor'];
        let num = Math.floor(Math.random() * 3);
        let value = arr[num];
        return (setCompAnswer(value));

    }



    function getUserAnswer() {
        let userOptions = document.getElementById('dropdown');
        let indexValue = userOptions.options.selectedIndex
        let userValue = userOptions[indexValue].value;
        setUserChoice(userValue);

        reset();

        console.log("Counter : " + counter);
        if (counter === 10) {
            userOptions.setAttribute('disabled', '');

            if (userScore > compScore) {
                console.log("You are the WINNER");
                setWinner("You are the WINNER")
            }
            else if (userScore < compScore) {
                console.log("Computer is the Winner");
                setWinner("Computer is the Winner")
            }
            else if (userScore === compScore) {
                console.log("It is a TIE between you and computer");
                setWinner("It is a TIE between you and computer")
            }
        }
    }

    function replay() {
        window.location.reload();
    }

    const handleChange = () => {
        getCompAnswer();
        getUserAnswer();
    }





    return (
        <>
            <div className='wrap'>
                <div className='main-div'>
                    <div className='user-section'>
                        <h2>User Choice : {userChoice}</h2>
                        <select onChange={handleChange} name="userOption" id="dropdown">
                            <option>-</option>
                            <option value='Rock'>Rock</option>
                            <option value='Paper'>Paper</option>
                            <option value='Scissor'>Scissor</option>
                        </select>

                    </div>


                    <div className='comp-section'>
                        <CompChoice compReply={compAnswer} />
                    </div>

                    <div className='game-setting'>
                        <h3>Chances Remaining: </h3>
                        <h4>{11 - counter}</h4>
                        <button onClick={replay}>Re-Play</button>
                    </div>


                </div >
                <div className='score'>
                    <Score userCount={userScore}
                        compCount={compScore}
                    />
                </div>

                <div className='winner'><h1>{winner}</h1></div>
            </div>
        </>
    )
}

export default UserChoice
