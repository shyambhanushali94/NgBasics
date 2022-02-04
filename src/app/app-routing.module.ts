import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'user-forms' , pathMatch:'full'
    
  },
  {
    path: 'directives',
    loadChildren: () => import('../app/features/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('../app/features/reactive-demo/reactive-demo.module').then(m => m.ReactiveDemoModule)
  },

  {
    
    path: 'user-forms',
    loadChildren: () => import('../app/features/user-form/user-form.module').then(m => m.UserFormModule)
  },

  {
    path: '**',
    component: PageNotFoundComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
