import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageKanbamComponent } from './pages/page-kanbam/page-kanbam.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/init',
    pathMatch: 'full'
  },
  {
    path: 'init',
    component: InitComponent
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'kanbam',
    component: PageKanbamComponent
  },
  {
    path: 'users',
    component: PageUsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
