export type * from './ui';
export type * from './navigation';
export * from './event';
export * from './module';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};
