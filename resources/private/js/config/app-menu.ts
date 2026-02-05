// Define the interface for a menu item
import { admin_dashboard } from '@@/routes';
import { index as user } from '@@/routes/users';
import { index as role } from '@@/routes/roles';
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
}

// Use the interface to type the Menu array
const menus: MenuItem[] = [
    {
        path: admin_dashboard().url,
        icon: 'fa fa-sitemap',
        title: 'Dashboard',
    },
    {
        path: '/email',
        icon: 'fa fa-hdd',
        title: 'Post',
        children: [
            { path: '/email/inbox', title: 'All Post' },
            { path: '/email/compose', title: 'New Post' },
            { path: '/email/detail', title: 'Category' },
        ],
    },
    { path: '/widgets', icon: 'fab fa-simplybuilt', title: 'Media' },
    {
        path: '/ui',
        icon: 'fa fa-gem',
        title: 'Page',
        children: [
            { path: '/ui/general', title: 'All Pages' },
            { path: '/ui/typography', title: 'New Page' },
        ],
    },
    {
        is_header: true,
        title: 'MASTER DATA',
    },

    {
        path: user.get().url,
        icon: 'fa fa-list-ol',
        title: 'User',

        children: [
            { path: user.get().url, title: 'All User' },
            { path: '/form/plugins', title: 'Create New' },
        ],
    },
    {
        path: role.get().url,
        icon: 'fa fa-list-ol',
        title: 'Role & Permission',

        children: [
            { path: role.get().url, title: 'All Role' },
            { path: '/form/plugins', title: 'Create New' },
        ],
    },
];

export default menus;
