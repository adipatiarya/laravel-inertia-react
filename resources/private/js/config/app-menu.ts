// Define the interface for a menu item
import { admin_dashboard } from '@@/routes';
import userUrl from '@@/routes/users';
import roleUrl from '@@/routes/roles';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@@/types';
export interface MenuItem {
    path?: string;
    title: string;
    icon?: string;
    badge?: number;
    img?: string;
    highlight?: boolean;
    label?: string;
    is_header?: boolean;
    children?: MenuItem[];
    show: boolean;
}

// Use the interface to type the Menu array

export function MenuConfig(): MenuItem[] {
    const { auth } = usePage<SharedData>().props;
    const menus: MenuItem[] = [
        {
            path: admin_dashboard().url,
            icon: 'fa fa-sitemap',
            title: 'Dashboard',
            show: true,
        },
        {
            path: '/email',
            icon: 'fa fa-hdd',
            title: 'Post',
            show: auth.user.access.some((access) => ['read posts', 'create posts'].includes(access)),
            children: [
                { path: '/email/inbox', title: 'All Post', show: auth.user.access.includes('read posts') },
                { path: '/email/compose', title: 'New Post', show: auth.user.access.includes('create posts') },
                { path: '/email/detail', title: 'Category', show: true },
            ],
        },
        { path: '/widgets', icon: 'fab fa-simplybuilt', title: 'Media', show: auth.user.access.some((access) => ['read media'].includes(access)) },
        {
            path: '/ui',
            icon: 'fa fa-gem',
            title: 'Page',
            show: auth.user.access.some((access) => ['read pages', 'create pages'].includes(access)),
            children: [
                { path: '/ui/general', title: 'All Pages', show: auth.user.access.includes('read pages') },
                { path: '/ui/typography', title: 'New Page', show: auth.user.access.includes('create pages') },
            ],
        },
        {
            is_header: true,
            show: auth.user.access.some((access) => ['read users', 'create users', 'read roles', 'create roles'].includes(access)),
            title: 'MASTER DATA',
        },

        {
            path: userUrl.index.get().url,
            icon: 'fa fa-users',
            title: 'User',
            show: auth.user.access.some((access) => ['read users', 'create users'].includes(access)),

            children: [
                { path: userUrl.index.get().url, title: 'All User', show: auth.user.access.includes('read users') },
                { path: userUrl.create.get().url, title: 'Create New', show: auth.user.access.includes('create users') },
            ],
        },
        {
            path: roleUrl.index.get().url,
            icon: 'fa fa-list-ol',
            title: 'Role & Permission',
            show: auth.user.access.some((access) => ['read roles', 'create roles'].includes(access)),
            children: [
                { path: roleUrl.index.get().url, title: 'All Role', show: auth.user.access.includes('read roles') },
                { path: roleUrl.create.get().url, title: 'Create New', show: auth.user.access.includes('create roles') },
            ],
        },
    ];
    return menus;
}
