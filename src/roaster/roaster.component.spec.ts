import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastrComponent } from './roastr.component';

describe('RoastrComponent', () => {
  let component: RoastrComponent;
  let fixture: ComponentFixture<RoastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoastrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
