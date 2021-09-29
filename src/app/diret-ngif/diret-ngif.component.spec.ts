import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgifComponent } from './diret-ngif.component';

describe('DiretNgifComponent', () => {
  let component: DiretNgifComponent;
  let fixture: ComponentFixture<DiretNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
