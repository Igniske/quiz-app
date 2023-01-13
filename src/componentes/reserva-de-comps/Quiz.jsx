import React from "react";
import { useState } from "react";

function Quiz(){
    const [estado, setEstado] = useState(true)
  const [numero, setNumero] = useState(1)
  const [respondiendo, setRespondiendo] = useState(true)
  const [correctas, setCorrectas] = useState(0)
  const [correct, setCorrect] = useState("")
  const [incorrect, setIncorrect] = useState("")
  const preguntas= ["What npm stands for?", "Which one is not a data type in Javascript?", "CSS Box Model consist of 4 elements:", "Which of these is not an OOP concept?", "Select the method that adds an element at the end of an array"]
  const respuestas = [[["Node Management Package", 1], ["Network Management Package", 0], ["Network Management Protocol", 0], ["New Management Package", 0]], [["Boolean", 0], ["Undefined", 0], ["Object", 0], ["Array", 1]], [["Content, border, z-index, font size", 0], ["Content, Border, Margin, Padding", 1], ["Margin, Padding, Background color, border", 0], ["Content, Border color, Margin, Padding", 0]], [["Abstraction", 0], ["Encapsulation", 0], ["Construction", 1], ["Inheritance", 0]], [[".pop()", 0], [".shift()", 0], [".add()", 0], [".push()", 1]]]

  function cambio(e){
    e.preventDefault()
    setEstado(false);
  }

  function inicio(){ 
    return (
    <div>
      <div>
        <p className="descripcion">In this quiz you are going to test you knowledge in front-end development. Are you ready?</p>
      </div>
      <div className='centrar'>
        <button onClick={cambio} className="comenzar">Start!</button>
      </div>
  </div>)
}

function avanzar(e){
  e.preventDefault()
  setRespondiendo(true)
  setNumero(numero + 1)
  setCorrect("")
  setIncorrect("")
}

function comprobar(e){
  e.preventDefault()
  if(respondiendo === true){
    if(respuestas[numero - 1][e.target.value][1] === 1){
      setRespondiendo(false)
      setCorrectas(correctas + 1)
      setCorrect("correct")
      setIncorrect("incorrect")
    } else{
      setRespondiendo(false)
      setIncorrect("incorrect")
      setCorrect("correct")
    }
  }
}

 function comienzo(){
  return (
    <div>
      <h3>Question number #{numero}</h3>
      <p className="pregunta-quiz">{preguntas[numero - 1]}</p>
      <ul>
        <li value="0" className={"pregunta " + (respuestas[numero - 1][0][1] === 1 ? correct : incorrect) } onClick={comprobar}>{respuestas[numero - 1][0][0]}</li>
        <li value="1" className={"pregunta " + (respuestas[numero - 1][1][1] === 1 ? correct : incorrect) } onClick={comprobar}>{respuestas[numero - 1][1][0]}</li>
        <li value="2" className={"pregunta " + (respuestas[numero - 1][2][1] === 1 ? correct : incorrect) } onClick={comprobar}>{respuestas[numero - 1][2][0]}</li>
        <li value="3" className={"pregunta " + (respuestas[numero - 1][3][1] === 1 ? correct : incorrect) } onClick={comprobar}>{respuestas[numero - 1][3][0]}</li>
      </ul>
      {respondiendo === false ? (numero < preguntas.length ? <div><button onClick={avanzar}>Next</button></div> : "Finished! You answered " + correctas + " questions right!") : ""}
    </div>
  )
 }

  return (
    <div className="App">
      <div className="cont-titulo">
        <h2 className="titulo">Front-end Development Quiz</h2>
      </div>
      <div className='caja-ext'>
    <div className='caja-int'>
      {estado === true ? inicio() : comienzo()}
    </div>
    </div>
    
    </div>
  )
}

export default Quiz;