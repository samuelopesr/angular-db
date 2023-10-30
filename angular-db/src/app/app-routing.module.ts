import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageKanbamComponent } from './pages/page-kanbam/page-kanbam.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { EditComponent } from './contatos/edit/edit.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { PageLearnComponent } from './pages/page-learn/page-learn.component';
import { PagePraticaComponent } from './pages/page-pratica/page-pratica.component';
import { NgMetodsExComponent } from './pages/page-pratica/ng-metods-ex/ng-metods-ex.component';
import { ContentAndViewComponent } from './pages/page-pratica/ng-metods-ex/content-and-view/content-and-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/init',
    pathMatch: 'full'
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'contentView',
    component: ContentAndViewComponent
  },
  {
    path: 'ngMetods',
    component: NgMetodsExComponent
  },
  {
    path: 'pratica',
    component: PagePraticaComponent
  },
  {
    path: 'init',
    component: InitComponent
  },
  {
    path: 'learn',
    component: PageLearnComponent
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
