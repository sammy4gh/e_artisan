import { TextInput } from './TextInput';
import { InputslLabel } from "./InputslLabel";
import React from "react";
import { InputProps, LabelProps } from "./InputTypes";
import { FileInput } from './FileInput';

type BasicFileInput = LabelProps & InputProps;

export function BasicFileInput({
                               inputName,
                               inputType,
                               labelFor,
                               labelName,
                               placeHolder,
                               customStyle
                           }: BasicFileInput) {
    return (
        <div className="login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner">
            <InputslLabel labelFor={labelFor} labelName={labelName} />{" "}
            <div>
                <FileInput  customStyle={customStyle}  placeHolder={placeHolder} inputType={inputType} inputName={inputName}  />
            </div>
        </div>
    );
}
