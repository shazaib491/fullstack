import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { InstantFormComponent } from './instant-form/instant-form.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:"services",component:ServicesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
