import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimengTableWrapperComponent } from './ngx-primeng-table-wrapper.component';

describe('NgxPrimengTableWrapperComponent', () => {
  let component: NgxPrimengTableWrapperComponent;
  let fixture: ComponentFixture<NgxPrimengTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimengTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPrimengTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
