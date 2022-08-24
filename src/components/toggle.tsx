import React, { useState, useEffect } from "react";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";
import { useSelector, useDispatch } from "react-redux";

type ToggleProps = {
  element : JSX.Element
}

const Toggle = ({element}) => {
  const [toggle , setToggle] = useState<boolean>(true);


const isToggle = (e) =>{
    e.preventDefault()
   setToggle(!toggle)

  }

  return (
    <>
      <div onClick={(e)=>isToggle(e)}>
        {toggle && element}
      </div>
    </>
  );
};

export default Toggle;
