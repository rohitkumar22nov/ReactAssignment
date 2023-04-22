import React from 'react'

function ClearAll({ clearAll }) {


    return (
        <div>

            <button className=' text-amber-900 font-extrabold	 align-center ml-44 w-1/3 border rounded p-2 bg-orange-300'
                onClick={() => clearAll()}
            >Clear All</button>


        </div>
    )
}

export default ClearAll
