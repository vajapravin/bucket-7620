import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './core/layout/common/common_layout.component';
import { LoginLayoutComponent } from './core/layout/login/login_layout.component';

import { dashboardRoutes } from './pages/dashboard/dashboard.routing';
import { customersRoutes } from './pages/customers/customers.routing';
import { loginRoutes } from './pages/login/login.routing';
import { profileRoutes } from './pages/profile/profile.routing';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      ...dashboardRoutes,
      ...customersRoutes,
      ...profileRoutes
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      ...loginRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }