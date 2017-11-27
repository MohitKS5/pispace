import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechshikhsaComponent } from './techshikhsa.component';

describe('TechshikhsaComponent', () => {
  let component: TechshikhsaComponent;
  let fixture: ComponentFixture<TechshikhsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechshikhsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechshikhsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
