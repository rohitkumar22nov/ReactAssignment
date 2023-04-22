import React, { useState } from 'react'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import ClearAll from './ClearAll';


function Main() {

    const id = uuidv4();

    const [input, setInput] = useState()
    const [todo, setTodo] = useState([])

    const userInput = (e) => {
        const newValue = e.target.value
        setInput(newValue)

    }

    const handleClick = () => {
        setTodo([...todo, input])
        setInput('')
    }

    const singleDelete = (id) => {
        const newArr = todo.filter((item, index) => id !== (index + 1))

        setTodo(newArr)
    }


    const clearAll = (id) => {
        console.log("all clear");
        setTodo([])
    }



    return (
        <div className='flex flex-col w-3/2 min-w-max h-5/6 my-14 rounded-s-lg   bg-amber-100 	'>
            <h2 className='text-4xl mx-40 text-amber-600 my-3'>To Do Items</h2>

            {todo.length > 1 ? <ClearAll clearAll={clearAll} /> : null}

            <div className='py-3 px-3 mb-4 flex flex-row justify-center	 '>
                <input onChange={userInput} className='mx-3 w-80' type="text" value={input} />
                <button onClick={handleClick} className='p-3 border border-zinc-950 rounded'>+</button>
            </div>

            <Todo key={id} data={todo} singleDelete={singleDelete} />

        </div>
    )
}

export default Main
