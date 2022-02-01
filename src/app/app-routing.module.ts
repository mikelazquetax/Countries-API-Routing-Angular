import { NotFoundComponent } from './not-found/not-found.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'country-list', pathMatch: 'full'},
  {path: 'country-list', component: CountryListComponent},
  {path: 'country-list/:country', component: CountryDetailComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
