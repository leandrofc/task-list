import type { ButtonHTMLAttributes } from "react";

export type VariantType = "primary" | "ghost";
export type SizeType = "small" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    variant?: VariantType
    size?: SizeType,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isLoading?: boolean;
    isDisable?: boolean;
    isWidthAuto?: boolean;
    isSelected?: boolean;
}