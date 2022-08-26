export type InputProps = {
	inputName: string;
	inputType?: string;
	placeHolder?: string;
	customStyle? : string;
	icon? : JSX.Element | any
};

export type LabelProps = {
    labelName : string;
    labelFor : string;
}

export  type TextAreaProps  = InputProps &{

}
export  type FileInput  = InputProps &{

}

