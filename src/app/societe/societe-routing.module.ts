import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocieteComponent } from './societe.component';

const routes: Routes = [
  {
    path: 'nouvellesociete',
    component: SocieteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
