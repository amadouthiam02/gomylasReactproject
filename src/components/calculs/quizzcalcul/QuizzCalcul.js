import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import QuizzForm from './QuizzForm'

//Composant affichant la liste des calculs effectués, et le composant Quizz form en lui passant des props
function QuizzCalcul() 
{

//-----------------------------States----------------------------------------

    const params=useParams()
    
    const [serieQuizz, SetSerieQuizz] = useState
    (
    [{id:1,
    op1:1,
    op2:1,
    op:"addition",
    res:2
    },
    {id:5,
        op1:1,
        op2:1,
        op:"addition",
        res:1
        }]
    )
        

//-----------------------------Behaviour----------------------------------------

//convertir parametre de l'URL en signe d'operation
      const operation=(params)=>
      {
        switch (params) {
            case 'addition':
                return("+")
                break;
            case 'soustraction':
                return("-")
                break;
                case 'multiplication':
                    return("*")
                    break;
                case 'division':
                    return("/")
                    break;          
              default:
                  break;
          }
  
      }

// Calculer le resultat de l'opération entre a et b suivant les cas addition, soustraction...
//Cette fonction est appelée dans le correcteur ci-dessous pour comparer le resultat saisi avec la bonne réponse
//l'opération a utiliser dans ce calcul n'est pas le params venant de l'URL, mais l'opération enregistrée dans le state


      const resultat=(a,b,op)=>{

        switch (op) {
            case 'addition':
                return(a+b)
                break;
            case 'soustraction':
                return(a-b)
                break;
                case 'multiplication':
                    return(a*b)
                    break;
                case 'division':
                    return(a/b)
                    break;          
              default:
                  break;
          }

      }
       
        const handleEnregistrer=(val1,val2,res)=>
        {
           
            const newId=Math.max(...serieQuizz.map(quizz=>quizz.id))+1
            const newQuizz={
                id:newId,
                op1:val1,
                op2:val2,
                op:params.operation,
                res:res
            }
            console.log(newId)
            console.log(newQuizz)

           
            SetSerieQuizz([...serieQuizz, newQuizz])
            console.log(serieQuizz)
        }

//-----------------------------Rendering----------------------------------------

    return (
        <div>
            <h1>{params.operation}:{serieQuizz.length} opérations faites </h1> <br/>
            <QuizzForm handleEnregistrer={handleEnregistrer} 
            val1={Math.floor(Math.random() * 100)} 
            val2={Math.floor(Math.random() * 100)} 
            operation={operation(params.operation)}/>
            <ul>
                
                {serieQuizz.map((quizz) => (
                    <li key={quizz.id}>
                        {quizz.op1}
                        {operation(quizz.op)}
                        {quizz.op2}
                        ={quizz.res} 
                        {((quizz.res)===resultat(quizz.op1,quizz.op2, quizz.op))?"  Trouvé  ":"  Faux  "}
                        (Reponse:{resultat(quizz.op1,quizz.op2,quizz.op)})
                    </li>
                ))} 
            </ul> 

        </div>
    )
}


//-----------------------------Export----------------------------------------

export default QuizzCalcul
