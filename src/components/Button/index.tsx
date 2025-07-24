import { forwardRef } from "react";
import type { ButtonProps, SizeType, VariantType } from "./index.types";

import { Loader } from "react-feather";

export const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    variant = "primary",
    text,
    size = "large",
    onClick,
    isDisable,
    isLoading,
    isWidthAuto = false,
    isSelected = false,
    ...rest
}, ref) => {

    const variantsClasses = {
        primary: "bg-blue-700 text-white",
        ghost: "hover:text-blue-700",
    }

    const iconColor = {
        primary: "text-white",
        ghost: "text-blue-700",
    }

    const sizesClasses = {
        small: "h-11",
        large: "h-14",
    }

    return (
        <button
            ref={ref}
            {...rest}
            className={`rounded-xl text-lg font-bold flex items-center justify-center
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                hover:scale-105 transition-transform
                ${variantsClasses[variant as VariantType]}
                ${sizesClasses[size as SizeType]}
                ${isLoading && "pointer-events-none"}
                ${isWidthAuto ? "w-auto" : "w-full"}
                ${isSelected ? "bg-blue-100 text-blue-700" : "text-gray-900"}
            `}
            disabled={isDisable}
            onClick={onClick}
        >
            {isLoading && <Loader className={`animate-spin-variable ${iconColor[variant as VariantType]}`} size={20} data-testid="loading-icon" />}
            {!isLoading && text}
        </button>
    )
});