import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FashionComponent } from './fashion/fashion.component';

const appRoutes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: 'ridingsolo',
    component: RidingsoloComponent
  },
  {
    path: 'beauty',
    component: BeautyComponent
  },
  {
    path: 'fashion',
    component: FashionComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
