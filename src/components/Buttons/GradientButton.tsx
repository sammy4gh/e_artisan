import React from "react";
import {GradientButtonProps} from './ButtonTypes'



export default function GradientButton(props: GradientButtonProps): JSX.Element{
  
  const { buttonName = 'name', textColor='text-gray-50',gradientDirection = 'bg-gradient-to-b', gradientColorTo = 'to-gray-100', gradientColorFrom= 'from-gray-200', } = props
  
  return <button className={`  " ${textColor} ${gradientDirection} ${gradientColorFrom} ${gradientColorTo} py-2 px-8 m rounded-lg  font-bold`}>{buttonName}</button>;
}
  
