import { FC } from "react";

export const Button: FC<{label: string}> = ({ label }) => {
    return (
        <button>{label}</button>
    )
}