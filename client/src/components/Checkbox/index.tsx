import { InputHTMLAttributes } from "react"
import CheckBoxStyled from "./style"
import { FieldValues, UseFormRegister } from "react-hook-form"


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name: string
    register?: UseFormRegister<FieldValues> | undefined
}


const CheckBox: React.FC<IInputProps> = ({ label, name, register, ...rest }) => {

    return (
        <CheckBoxStyled className="input-label">
            {label && label}
            <input
                type="checkbox"
                {...register?.(name)}
                {...rest}
            />
        </CheckBoxStyled>
    )
}

export default CheckBox