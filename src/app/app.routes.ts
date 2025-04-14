import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ReadEmployeeComponent } from './employee/read-employee/read-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { ReadCategoryComponent } from './category/read-category/read-category.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component:HomeComponent},
  {path:'employee/add-employee', component:AddEmployeeComponent},
  {path:'employee/update-employee', component:UpdateEmployeeComponent},
  {path:'employee/delete-employee', component:DeleteEmployeeComponent},
  {path:'employee', component:ReadEmployeeComponent},

  {path:'category/add-category', component:AddCategoryComponent},
  {path:'category/update-category/:id', component:UpdateCategoryComponent},
  {path:'category/delete-category', component:DeleteCategoryComponent},
  {path:'category', component:ReadCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
