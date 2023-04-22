import React from 'react'

function Score(props) {
    return (
        <div className='scoreCard'>
            <div className='userScore'>
                <h2>User Score</h2>
                <h3>{props.userCount}</h3>
            </div>
            <div className='compScore'>
                <h2>Comp Score</h2>
                <h3>{props.compCount}</h3>
            </div>
        </div>
    )
}

export default Score
