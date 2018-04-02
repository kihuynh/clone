import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';

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
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
