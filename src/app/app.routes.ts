import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/admin/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                loadComponent: () => import('./pages/admin/products/products.component').then(c => c.ProductsComponent)
            },
            {
                path: 'orders',
                loadComponent: () => import('./pages/admin/order/order.component').then(c => c.OrderComponent)
            },
            {
                path: 'customer',
                loadComponent: () => import('./pages/admin/customer/customer.component').then(c => c.CustomerComponent)
            }
        ]
    }
];
