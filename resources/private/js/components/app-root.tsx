import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AppRoot({children}: Props) {
    return (
        <div className="app">
            {children}
        </div>
    )
}