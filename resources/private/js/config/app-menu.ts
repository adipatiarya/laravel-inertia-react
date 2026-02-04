// Define the interface for a menu item
export interface MenuItem {
    path: string;
    title: string;
    icon?: string;
    badge?: number;
    img?: string;
    highlight?: boolean;
    label?: string;
    children?: MenuItem[];
}

// Use the interface to type the Menu array
const menus: MenuItem[] = [
    {
        path: 'dashboard',
        icon: 'fa fa-sitemap',
        title: 'Dashboard',
        children: [
            { path: 'dashboard/v1', title: 'Dashboard v1' },
            { path: 'dashboard/v2', title: 'Dashboard v2' },
            { path: 'dashboard/v3', title: 'Dashboard v3' },
        ],
    },
    {
        path: '/email',
        icon: 'fa fa-hdd',
        title: 'Email',
        badge: 10,
        children: [
            { path: '/email/inbox', title: 'Inbox' },
            { path: '/email/compose', title: 'Compose' },
            { path: '/email/detail', title: 'Detail' },
        ],
    },
    { path: '/widgets', icon: 'fab fa-simplybuilt', title: 'Widgets', label: 'NEW' },
    {
        path: '/ui',
        icon: 'fa fa-gem',
        title: 'UI Elements',
        label: 'NEW',
        children: [
            { path: '/ui/general', title: 'General', highlight: true },
            { path: '/ui/typography', title: 'Typograhy' },
            { path: '/ui/tabs-accordion', title: 'Tabs & Accordion' },
            { path: '/ui/modal-notification', title: 'Modal & Notification' },
            { path: '/ui/widget-boxes', title: 'Widget Boxes' },
            { path: '/ui/media-object', title: 'Media Object' },
            { path: '/ui/buttons', title: 'Buttons', highlight: true },
            { path: '/ui/icon-duotone', title: 'Duotone Icons', highlight: true },
            { path: '/ui/icon-fontawesome', title: 'FontAwesome' },
            { path: '/ui/icon-bootstrap', title: 'Bootstrap Icons', highlight: true },
            { path: '/ui/icon-simple-line-icons', title: 'Simple Line Icons' },
            { path: '/ui/language-bar-icon', title: 'Language Bar & Icon' },
            { path: '/ui/social-buttons', title: 'Social Buttons' },
        ],
    },
    { path: '/bootstrap-5', img: '/assets/img/logo/logo-bs5.png', title: 'Bootstrap 5', label: 'NEW' },
    {
        path: '/form',
        icon: 'fa fa-list-ol',
        title: 'Form Stuff',
        label: 'NEW',
        children: [
            { path: '/form/elements', title: 'Form Elements', highlight: true },
            { path: '/form/plugins', title: 'Form Plugins', highlight: true },
            { path: '/form/wizards', title: 'Form Wizards', highlight: true },
        ],
    },
];

export default menus;
