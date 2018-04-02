import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { MoreComponent } from './more/more.component';
import { VideoComponent } from './video/video.component';
import { ClassesComponent } from './classes/classes.component';

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
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
