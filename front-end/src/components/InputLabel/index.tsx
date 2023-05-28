import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import InputLabelStyled from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    placeholder: string
    register: UseFormRegister<FieldValues>
}

const Input: React.FC<IInputProps> = ({ label, name, placeholder, register, ...rest }) => {
    return <InputLabelStyled className="input-label">
        {label}
        <input
            placeholder={placeholder}
            {...register(name)}
            {...rest}
        />
    </InputLabelStyled>
}


export default Input