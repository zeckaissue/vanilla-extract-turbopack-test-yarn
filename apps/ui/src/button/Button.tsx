import { FC } from "react";
import { ButtonCss } from "./Button.css";

export const Button: FC<{label: string}> = ({ label }) => {
    return (
        <button className={ButtonCss}>{label}</button>
    )
}