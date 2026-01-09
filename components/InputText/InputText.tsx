import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText(props: InputTextProps){
    return (<Input {...props}>
        {props.children}
    </Input>)
}
