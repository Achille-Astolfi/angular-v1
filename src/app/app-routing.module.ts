import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.module';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "calculator", component: CalculatorComponent },
  // default
  { path: "", pathMatch: "full", redirectTo: "/index" },
  // catch-all
  { path: "**", pathMatch: "prefix", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
