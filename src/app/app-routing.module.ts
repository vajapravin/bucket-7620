import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { dashboardRoutes } from './pages/dashboard/dashboard.routing';
import { usersRoutes } from './pages/users/users.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...dashboardRoutes,
      ...usersRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }