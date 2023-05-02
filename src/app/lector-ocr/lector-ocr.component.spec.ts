import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorOcrComponent } from './lector-ocr.component';

describe('LectorOcrComponent', () => {
  let component: LectorOcrComponent;
  let fixture: ComponentFixture<LectorOcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorOcrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectorOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
