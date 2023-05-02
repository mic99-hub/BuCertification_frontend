import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certification} from "./certification";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private httpClient : HttpClient) {}

  getCertificationList(): Observable<Certification[]>{
    return this.httpClient.get<Certification[]>(`http://localhost:8080/certification`);
  }

  saveCertification(certification : Certification): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/certification/save` , certification);

  }

  updateCertification( certificationId : number , certification : Certification): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/certification/${certificationId}`, certification);
  }

  deleteCertification( certificationId :number ): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/certification/${certificationId}`);
  }

  getCertificationById(certificationId :number): Observable<Certification>{
    return this.httpClient.get<Certification>(`http://localhost:8080/certification/${certificationId}`)
  }

}
