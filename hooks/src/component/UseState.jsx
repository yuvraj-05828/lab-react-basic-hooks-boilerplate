import { useContext } from "react";
import { ToggleTheme } from "../App";
import { useState } from "react";
import { useEffect } from "react";

function UseStateEffectContext(){
  const [like, updateLike] = useState(0);
  const [contentState, setContent] = useState(false);  

  useEffect(()=>{
    alert("Content Button Clicked");
  },[contentState])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  let updateContent=()=>{
    setContent((contentState) => !contentState );
    }
  let para=contentState?"Coding is like building with digital Lego blocks. Programmers use instructions to create software magic. Finding and fixing mistakes is a bit like solving puzzles. Each code is a small piece, but when they come together, they make incredible things happen, powering the tech wonders we use every day.":""


  return(
    <div style={themeStyle}>
        <div>{para}</div>
        <button onClick={updateContent}> <span>Content</span> </button>
        <p>{like}</p>
        <button onClick={()=>updateLike(like=>like+1)}> <span>Like</span> </button>
    </div>
  )
}

export default UseStateEffectContext;