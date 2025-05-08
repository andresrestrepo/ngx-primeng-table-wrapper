import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegritableComponent } from './integritable.component';

describe('IntegritableComponent', () => {
  let component: IntegritableComponent;
  let fixture: ComponentFixture<IntegritableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegritableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegritableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
