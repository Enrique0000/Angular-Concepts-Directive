import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgclassComponent } from './diret-ngclass.component';

describe('DiretNgclassComponent', () => {
  let component: DiretNgclassComponent;
  let fixture: ComponentFixture<DiretNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
