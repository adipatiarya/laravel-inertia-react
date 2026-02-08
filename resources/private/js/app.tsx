import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

import '@fortawesome/fontawesome-free/css/all.css';
import '../css/styles.scss';
import { ErrorBoundary } from './components/app-error';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    id: 'root',
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <ErrorBoundary>
                    <App {...props} />
                </ErrorBoundary>
            </StrictMode>,
        );
    },
    progress: {
        color: '#29d', // warna bar
        delay: 250, // jeda sebelum muncul (ms)
    },
});
