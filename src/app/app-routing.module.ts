import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsureComponent } from './usure/usure.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  { path: 'usure', component: UsureComponent },
  { path: 'reference', component: ReferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
