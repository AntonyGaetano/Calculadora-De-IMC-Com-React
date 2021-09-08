import React,{useState} from "react";
import './App.css'
import Altura from "./Altura";
import Peso from "./Peso";
import Resultado from "./Resultado";
import Calcular from "./Calcular";
import TabelaIMC from "./TabelaIMC";

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

