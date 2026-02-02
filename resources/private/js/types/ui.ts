import { ReactNode } from 'react';
import { BreadcrumbItem } from './navigation';

export type AppLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    title: string;
};
