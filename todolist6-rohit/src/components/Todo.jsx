import React from 'react'

function Todo({ data, singleDelete }) {


    return (<>
        {data.map((item, index) => {
            return (
                <>

                    <div className='flex px-3 py-2'>

                        <div className='flex'>
                            <button onClick={() => singleDelete(index + 1)} className='float-left border rounded p-2 bg-orange-300 text-amber-900 font-extrabold'>Delete</button>
                        </div>

                        <div className='flex flex-row items-center w-2/3	'>
                            <h3 className='text-xl ml-3'>{item}</h3>
                        </div>
                    </div>

                </>
            )
        })}
    </>)
}

export default Todo

