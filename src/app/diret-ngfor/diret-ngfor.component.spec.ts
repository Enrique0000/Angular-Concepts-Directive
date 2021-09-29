import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgforComponent } from './diret-ngfor.component';

describe('DiretNgforComponent', () => {
  let component: DiretNgforComponent;
  let fixture: ComponentFixture<DiretNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
