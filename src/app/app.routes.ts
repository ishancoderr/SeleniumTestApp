
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoBLUContactComponent } from './go-blucontact/go-blucontact.component'; // Adjust the path if necessary

export const routes: Routes = [
  { path: 'contact', component: GoBLUContactComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to contact component by default
  { path: '**', redirectTo: '' } // Wildcard route for a 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }