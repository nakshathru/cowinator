import { Router } from '@vaadin/router';
import './app';
const routes = [
    {
        path: '/',
        component: 'cowin-app',
        children: [
            {
                path: '/',
                component: 'home-module',
                action: async () => {
                    await import('./modules/home/index');
                },
            },
            {
                path: '/login',
                component: 'login-module',
                action: async () => {
                    await import('./modules/login/index');
                },
            }
        ]
    }
];
const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
//# sourceMappingURL=router.js.map