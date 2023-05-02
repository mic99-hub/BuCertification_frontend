import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {SaveEmployeeComponent} from "./save-employee/save-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {CertificationListComponent} from "./certification-list/certification-list.component";
import {SaveCertificationComponent} from "./save-certification/save-certification.component";
import {UpdateCertificationComponent} from "./update-certification/update-certification.component";

const routes: Routes = [
  {path:'employees-list' , component: EmployeeListComponent},
  {path:'save-employee' , component: SaveEmployeeComponent},
  {path:'update-employee/:id' , component: UpdateEmployeeComponent},
  {path:'certifications-list' , component : CertificationListComponent},
  {path:'save-certification' , component : SaveCertificationComponent},
  {path:'update-certification/:id' , component : UpdateCertificationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
