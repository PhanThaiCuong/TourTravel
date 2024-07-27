import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { DetailComponent } from './detail/detail.component';
import { ListtourComponent } from './listtour/listtour.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { MaindashboardComponent } from './admin/maindashboard/maindashboard.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UpdateComponent } from './admin/update/update.component';
import { loginGuard } from './guards/login.guard';

 export const routes: Routes = [
{
  path: '',
  component: MainComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ListproductComponent },
    { path: 'product/:id', component: DetailComponent },
    { path: 'tour', component: ListtourComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    
  ]

},
{
  path: 'admin',
  component : AdminComponent,
  canActivate: [loginGuard],
  children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'maindashboard', component: MaindashboardComponent},
    {path: 'addproduct', component: AddproductComponent},
    {path: 'update/:id', component: UpdateComponent},
  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
