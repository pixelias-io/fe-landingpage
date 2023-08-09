import { FC, ReactHTML, ReactNode } from "react";

interface CardProps {
    as?: keyof ReactHTML
    className?: string;
    children: ReactNode;
}

export const Card: FC<CardProps> = ({ as = 'div', ...props }) => {
    const As = as
    return <As {...props} />
}
    