import { TextAreaProps } from "./InputTypes";

export function TextInput({ placeHolder, inputName, customStyle }:TextAreaProps) {
    return (
        <textarea
            cols={50}
            placeholder={placeHolder}
            name={inputName}

            className={` ${customStyle} form-control
        focus:border-blue-600 focus:outline-none border-none rounded-lg font-bold focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500`}
        />
    );
}
