// create a label component that can be used in the Input and TextArea components

import { DetailedHTMLProps, FC, LabelHTMLAttributes, ReactNode } from "react";

// type the label component

type LabelProps = {
    children: ReactNode;
} & DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
>


export const Label: FC<LabelProps> = ({
    children,
    ...props
}) => {
    const className = "text-midnight-blue/50 text-sm mb-2";
    return  (
        <label className={className} {...props}>
            {children}
        </label>
    )
}