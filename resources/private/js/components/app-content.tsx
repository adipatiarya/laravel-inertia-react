import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    variant?: 'header' | 'sidebar';
};

export  function AppContent({children}: Props) {
  return (
    <div>
         AppContent 
        {children}
    </div>
  )
}
