import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';

const routes: Routes = [
  {path : "",component : HomeComponent},
  {path : "submissions",component : SubmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
