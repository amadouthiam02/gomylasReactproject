import React from 'react'
import { useState } from 'react'



function QuizzForm(props) {

    const [res, SetRes] = useState(0)
    

    return (
        <div>
           {props.val1}
           {props.operation}
           {props.val2} = 
           <input type="number" value={res} onChange={(e)=>SetRes(e.target.value)}/>
           <button onClick={()=>props.handleEnregistrer(props.val1,props.val2,{res})}>Enregistrer</button>
        </div>
    )
}

export default QuizzForm
