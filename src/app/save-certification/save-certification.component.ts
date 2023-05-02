import {Component, OnInit} from '@angular/core';
import {Certification} from "../certification";
import {CertificationService} from "../certification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-certification',
  templateUrl: './save-certification.component.html',
  styleUrls: ['./save-certification.component.css']
})
export class SaveCertificationComponent implements OnInit{

  certification : Certification = new Certification();
  constructor( private certificationService : CertificationService,
               private router : Router) {
  }




  ngOnInit(): void {
  }

  saveCertification(){
    this.certificationService.saveCertification(this.certification).subscribe( data=>{
      console.log(data);
      this.goToCertificationList();
    })
  }

  goToCertificationList(){
    this.router.navigate(['/certification-list']);

  }

  onSubmit() {
    console.log(this.certification);
    this.saveCertification();

  }
}
