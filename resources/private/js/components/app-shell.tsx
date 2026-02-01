import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export  function AppShell({children}: Props) {
    return (
        <div id="app" className="app app-header-fixed app-sidebar-fixed">
            {children}
        </div>
    )
}