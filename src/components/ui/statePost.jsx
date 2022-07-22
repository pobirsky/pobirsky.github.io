import React, {useState} from "react";
import {data} from "./mockData";

const StatePost = () => {
 const [state, setState]= useState(data);

  return (
    <div>
      {state.map(({title, id, text}) => {
        return (
         <div>
           <div id={id}>{title}</div>
           <span id={id}>{text}</span>
         </div>
      )
      })}
    </div>
  );
};

export default StatePost;
