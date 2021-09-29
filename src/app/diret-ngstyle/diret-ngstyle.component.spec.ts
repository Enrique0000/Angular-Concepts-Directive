import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgstyleComponent } from './diret-ngstyle.component';

describe('DiretNgstyleComponent', () => {
  let component: DiretNgstyleComponent;
  let fixture: ComponentFixture<DiretNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
