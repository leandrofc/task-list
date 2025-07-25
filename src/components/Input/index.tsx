import { useRef, forwardRef, useImperativeHandle } from "react";
import type InputProps from "./index.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);
  
    const handleFocus = () => {
        internalRef.current?.focus();
    };

    return (
        <div>
            <div
                className="flex w-full gap-2 flex-col"
                onClick={handleFocus}
            >
                <label className="text-gray-900 text-lg" htmlFor={id}>
                    {label}
                </label>
                <input
                    ref={internalRef}
                    id={id}
                    className="h-12 bg-transparent text-md text-black placeholder-blue-700 rounded-xl border border-gray-300 focus:border-blue-700 p-4 focus:outline-none"
                    {...props}
                />
            </div>
        </div>
    )
}
);

export default Input;