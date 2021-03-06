import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: "index", component: IndexComponent },
  // default
  { path: "", pathMatch: "full", redirectTo: "/index" },
  // catch-all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
