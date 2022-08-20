
export type ButtonProps = {
    buttonName: string,
    customStyle? : string,
    textColor? : string,
    route? : string
}

export type GradientButtonProps = ButtonProps &{
   
    gradientColorFrom?: string,
    gradientColorTo?: string,
    gradientDirection? : string,
    
}