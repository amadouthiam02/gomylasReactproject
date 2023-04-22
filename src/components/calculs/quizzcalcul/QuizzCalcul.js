import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import QuizzForm from './QuizzForm'


function QuizzCalcul() 
{
    const params=useParams()
    
    const [serieQuizz, SetSerieQuizz] = useState
    (
    [{id:1,
    op1:1,
    op2:1,
    res:2
    },
    {id:5,
        op1:1,
        op2:1,
        res:1
        }]
    )
        
      //  const handleClickSerie=()=>console.log("handlClickSerie", serieQuizz.length)
        
      //  const handleClick=()=>
       
        const handleEnregistrer=(val1,val2,res)=>
        {
           
            const newId=Math.max(...serieQuizz.map(quizz=>quizz.id))+1
            const newQuizz={
                id:newId,
                op1:val1,
                op2:val2,
                res:res
            }
            console.log(newId)
            console.log(newQuizz)

           
            SetSerieQuizz([...serieQuizz, newQuizz])
            console.log(serieQuizz)
        }



    return (
        <div>
            <h1>{params.operation}:{serieQuizz.length} opérations faites </h1> <br/>
            <QuizzForm handleEnregistrer={handleEnregistrer} val1={Math.floor(Math.random() * 100)} val2={Math.floor(Math.random() * 100)}/>
            <ul>
                
                {serieQuizz.map((quizz) => (
                    <li key={quizz.id}>
                        {quizz.op1}+{quizz.op2}={quizz.res} 
                        {((quizz.res)===(quizz.op1+quizz.op2))?"  Trouvé":"  Faux"}
                    </li>
                ))} 
            </ul> 

        </div>
    )
}
export default QuizzCalcul
