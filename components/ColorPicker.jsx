import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";
import {useState} from 'react';
export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);
  const isSelColor = color === selColor;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",

        //if this color is selected, show this
        borderColor: isSelColor? "magenta":"black",
        borderWidth: isSelColor? "7px": "2px",
        
        //if this color is not selected, show this
        //borderColor: "black",
        //borderWidth: "2px",
    
      }}
      onClick={() => {
        //set selecting color when clicked
        //your code here
        setSelColor(color)
        
      }}
    />
  );

}