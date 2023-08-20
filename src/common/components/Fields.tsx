import { forwardRef, HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";

interface TextFieldProps {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  error: FieldError | undefined;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, title, type, placeholder, error, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm md:text-base font-medium">
          {title}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full sm:w-80 rounded-tr-lg rounded-bl-lg rounded-br-lg border-[1px] border-gray-200 shadow-sm text-sm md:text-base py-2 px-3 mt-1 focus:outline-0 focus:border-jet"
          ref={ref}
          {...rest}
        />
        {error && (
          <p className="text-sm text-tomato font-semibold">{error.message}</p>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";

const TextAreaField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ id, title, placeholder, error, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm md:text-base font-medium">
          {title}
        </label>
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          className="w-full sm:w-80 rounded-tr-lg rounded-bl-lg rounded-br-lg border-[1px] border-gray-200 align-top shadow-sm text-sm md:text-base py-2 px-3 mt-1 focus:outline-0 focus:border-jet"
          ref={ref}
          {...rest}
        />
        {error && (
          <p className="text-sm text-tomato font-semibold">{error.message}</p>
        )}
      </div>
    );
  },
);
TextAreaField.displayName = "TextAreaField";

const FieldError = ({ message }: { message: string | undefined }) => {
  return <p className="text-sm text-tomato font-semibold">{message}</p>;
};

export { TextField, TextAreaField, FieldError };
