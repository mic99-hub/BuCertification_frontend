import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService : EmployeeService,
              private router : Router,
              private route: ActivatedRoute) {
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id , this.employee).subscribe(data=>{
      console.log(data);
      this.employee= new Employee();
      this.goTo();
    })
  }

  onSubmit() {
    this.updateEmployee();
    this.router.navigate(['/employees'])

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    })
  }

  goTo(){
    this.router.navigate(['/employees'])
  }
}
