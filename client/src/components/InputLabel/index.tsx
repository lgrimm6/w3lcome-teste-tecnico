import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputLabelStyled from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Input: React.FC<IInputProps> = ({
  label,
  name,
  placeholder,
  register,
  required,
  errors,
  ...rest
}) => {
  return (
    <InputLabelStyled className="input-label">
      {label}
      <input
        placeholder={placeholder}
        {...register(name, { required: required })}
        {...rest}
      />
      {errors.titulo?.type === "required" && (
        <span className="error-input-label">titulo é obrigatorio</span>
      )}
    </InputLabelStyled>
  );
};

export default Input;
