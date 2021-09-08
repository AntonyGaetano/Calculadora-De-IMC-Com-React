import React,{useState} from "react";
import './App.css'
import Altura from "./Altura";
import Peso from "./Peso";
import Resultado from "./Resultado";
import Calcular from "./Calcular";
import TabelaIMC from "./TabelaIMC"

const tabelaIMC=()=>{
  return(
    <table border="1" style={{borderCollapse:"collapse"}}>
     <thead>
       <tr>
          <th>Classificação</th>
          <th>IMC</th>
       </tr>
     </thead>
     <tbody>
       <tr>
        <td>Abaixo do Peso</td>
        <td>Entre 18,5</td>
       </tr>

       <tr>
        <td>Peso Normal</td>
        <td>Entre 18,5 e 24,9</td>
       </tr>

       <tr>
        <td>Sobrepeso</td>
        <td>Entre 25 e 29,9</td>
       </tr>

       <tr>
        <td>Obesidade Grau I</td>
        <td>Entre 30 e 34,9</td>
       </tr>

       <tr>
        <td>Obesidade Grau II</td>
        <td>Entre 35 e 39,9</td>
       </tr>

       <tr>
        <td>Obesidade Grau III</td>
        <td>Maior que 40</td>
       </tr>
     </tbody>
    </table>
  )
}

const fpeso=(p,sp)=>{
  return(
    <div className="input-Alt-Pes">
      <label>
        Peso
        <input type="text" value={p} onChange={(e)=>sp(e.target.value)}/>
      </label>
    </div>
  )
}

const faltura=(a,sa)=>{
  return(
    <div className="input-Alt-Pes">
      <label>
        Altura
        <input type="text" value={a} onChange={(e)=>sa(e.target.value)}/>
      </label>
    </div>
  )
}

const fcalcular=(p,a,sr)=>{
   const calc=()=>{
     sr(p/(a*a))

   }
   return(
     <div>
      
       <button style={{padding:"0.5rem", marginTop:"0.7rem"}} onClick={calc}>Calcular</button>
     </div>
   )
}

const fresultado=(r)=>{
  return(
    <div>
      <p style={{fontFamily:"cursive"}}>{"Resultado: "+ r.toFixed(1)}</p>
    </div>

  )
}

export default function App(){

  const[peso,setPeso]=useState(0);
  const[altura,setAltura]=useState(0);
  const[resultado,setResultado]=useState(0);

  return (
   <section>
   <h1>Calculadora de IMC</h1>
   <Altura a={altura} sa={setAltura}/>
   <Peso p={peso} sp={setPeso}/>
   <Calcular p={peso} a={altura} sr={setResultado}/>
   <Resultado r={resultado}/>
   <TabelaIMC/>
   </section>
  );
}

