import React from "react";

export default function Calcular(props){
    const calc=()=>{
        props.sr(props.p/(props.a*props.a))

      }
      return(
        <div>
          <button style={{padding:"0.5rem", marginTop:"0.7rem"}} onClick={calc}>Calcular</button>
        </div>
      )
}