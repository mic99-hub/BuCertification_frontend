import {Component, OnInit} from '@angular/core';
import {CertificationService} from "../certification.service";
import {Certification} from "../certification";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-certification',
  templateUrl: './update-certification.component.html',
  styleUrls: ['./update-certification.component.css']
})
export class UpdateCertificationComponent implements OnInit{

  certificationId! : number;
  certification : Certification = new Certification();

  constructor(private certificationService : CertificationService ,
              private router : Router,
              private route : ActivatedRoute) {
  }
  ngOnInit(): void {
    this.certificationId = this.route.snapshot.params['certificationId'];
    this.certificationService.getCertificationById(this.certificationId).subscribe( data =>{
      this.certification = data;
    })
  }

  onSubmit() {
    this.certificationService.updateCertification(this.certificationId,this.certification).subscribe( data =>{
      this.goToCertificationList();
    })
  }

  goToCertificationList(){
    this.router.navigate(['/certification-list']);

  }
}
