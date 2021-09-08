
import React from "react";

export default function Resultado(props){
    return(
      <div>
          <p style={{fontFamily:"cursive"}}>{"Resultado: "+ props.r.toFixed(1)}</p>
      </div> 
    )
}