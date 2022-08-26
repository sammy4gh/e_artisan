import React from "react";
import { FileInput, InputProps } from "./InputTypes";

export function FileInput({ placeHolder, inputName, customStyle, inputType }: FileInput) {
  return (
    <input
        type={'file'}
      placeholder={placeHolder}
      name={inputName}
      id={inputName}
      className={` ${customStyle} block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100`}
    />
  );
}
