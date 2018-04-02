import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RidingsoloComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
