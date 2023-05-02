import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCertificationComponent } from './save-certification.component';

describe('SaveCertificationComponent', () => {
  let component: SaveCertificationComponent;
  let fixture: ComponentFixture<SaveCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
