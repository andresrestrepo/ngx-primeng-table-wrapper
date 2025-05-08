import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegritableExportComponent } from './export.component';

describe('ExportComponent', () => {
  let component: IntegritableExportComponent;
  let fixture: ComponentFixture<IntegritableExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegritableExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegritableExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
