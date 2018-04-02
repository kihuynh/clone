import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';

const appRoutes: Routes = [
  {
    path:'',
    component: MainComponent,
  },
  {
    path: 'ridingsolo',
    component: RidingsoloComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
