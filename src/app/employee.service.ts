import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL = "http://localhost:8080/employees";


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`http://localhost:8080/employees/list`);
  }

  saveEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  updateEmployee(id: number, employee: Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee)
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }




}
