import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadComponent:()=> import('./Pages/home-page/home-page.component').then(ob=>ob.HomePageComponent), title:' POS | HOME'},
];
