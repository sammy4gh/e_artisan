import { InputslLabel } from "./InputslLabel";
import { InputProps, LabelProps } from "./InputTypes";
import { TextInput } from "./TextInput";

type BasicTextAreaProps = LabelProps & InputProps;
export function BasicTextArea({
                               inputName,
                               inputType,
                               labelFor,
                               labelName,
                               placeHolder,
                               customStyle
                           }: BasicTextAreaProps){
    return (
      <div className="login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner">
        <InputslLabel labelFor={labelFor} labelName={labelName} />{" "}
        <div>
          <TextInput
            customStyle={customStyle}
            placeHolder={placeHolder}

            inputName={inputName}
          />
        </div>
      </div>
    );
  };

