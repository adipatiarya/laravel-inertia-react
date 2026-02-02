import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export function AppContent({ children }: Props) {
    return (
        <div id="content" className="app-content">
            {children}
        </div>
    );
}
