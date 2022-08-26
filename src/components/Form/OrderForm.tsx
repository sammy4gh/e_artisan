import { SubmitButton } from "../Buttons/SubmitButton";
import { BasicFileInput } from "../Inputs/BasicFileInput";
import { BasicInput } from "../Inputs/BasicInput";
import { BasicTextArea } from "../Inputs/BasicTextArea";
import { InputslLabel } from "../Inputs/InputslLabel";

export const OrderForm = () => {
  return (
    <div>
      <form action="" method={"post"}>
        <BasicInput
          labelFor="subject"
          labelName="Subject"
          inputName="subject"
          inputType="text"
          placeHolder=""
          customStyle="w-full"
        />{" "}
        <BasicFileInput
            labelFor="media"
            labelName="Pictures"
            inputName="media"
            placeHolder=""
            customStyle="w-full"
        />
        <div className={'login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner'}>
          <InputslLabel labelFor={'description'} labelName={'Desription'} />{" "}

          <textarea
              cols={32}

name={'description'}
              className={`  form-control
      bg-white
       focus:outline-none border-none rounded-lg font-bold focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500`}
          />
        </div>


        <SubmitButton buttonName="Submit" />
      </form>
    </div>
  );
};

export default OrderForm;
