import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './components/section/home/home.component';
import { AboutComponent } from './components/section/about/about.component';


const routes: Routes = [
    {path : '' , redirectTo : '/home-page' , pathMatch : 'full'},
    {path : 'home-page/:title' , component : HomeComponent},
    {path : 'about-page/:title' , component : AboutComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }
