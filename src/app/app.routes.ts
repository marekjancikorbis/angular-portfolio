import { Routes } from '@angular/router';
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export const routes: Routes = [];
