import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { Parent2Component } from './components/parent2/parent2.component';


const routes: Routes = [
  {path: 'parent' , component: ParentComponent},
  {path: 'parent2', component: Parent2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ParentComponent, Parent2Component ] 