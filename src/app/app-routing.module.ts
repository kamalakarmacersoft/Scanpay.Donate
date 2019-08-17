import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: 'donation', loadChildren: './donation/donation.module#DonationModule' },
  // otherwise redirect to home
  { path: '**', redirectTo: 'donation' }
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};


//export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }