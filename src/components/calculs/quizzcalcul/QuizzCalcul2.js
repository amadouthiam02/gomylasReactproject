import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const params=useParams()
const val1=Math.floor(Math.random() * 100)
const val2=Math.floor(Math.random() * 100)
const [serieQuizz, SetSerieQuizz] = useState
    (
        [{id:1,
        op1:val1,
        op2:val2,
        res:1
        }]
    )

function QuizzCalcul2() {
    return (
        <div>
            <h1>{params.operation} </h1>
          <button onClick={handleClickSerie}>Redémarrer test<button/> <hr/>
        </div>
    )
}

export default QuizzCalcul2
