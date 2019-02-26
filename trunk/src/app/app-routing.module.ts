import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: "reLogin",//path不能以斜杠'/'开头
    component: null //reloginComponent
  },
  {
    path: "home",
    component: null //home
  },
  {
    path: "help",
    component: null //helpPageComponent
  },
  {
    path: "upload",
    component: null //uploadMyMusic
  },
  {
    path:"home/playAndShare/:id",
    component:null
  },
  {
    path: '',//表示默认路径
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: null//PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

