import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoappComponent } from './todoapp/todoapp.component';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
