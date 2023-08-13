import {TextFieldProps} from "@/types";

const TextField = ({id, title, type, placeholder}: TextFieldProps) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm md:text-base font-medium">{title}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full sm:w-80 rounded-tr-lg rounded-bl-lg rounded-br-lg border-[1px] border-gray-200 shadow-sm text-sm md:text-base py-2 px-3 mt-1 focus:outline-0 focus:border-jet"
            />
        </div>
    );
}

const TextAreaField = ({id, title, placeholder}: TextFieldProps) => {
    return (
        <div>
            <div>
                <label htmlFor={id} className="block text-sm md:text-base font-medium">{title}</label>
                <textarea
                    id={id}
                    className="w-full sm:w-80 rounded-tr-lg rounded-bl-lg rounded-br-lg border-[1px] border-gray-200 align-top shadow-sm text-sm md:text-base py-2 px-3 mt-1 focus:outline-0 focus:border-jet"
                    rows={4}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export {TextField, TextAreaField};