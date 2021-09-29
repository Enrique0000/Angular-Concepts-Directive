import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgswitchComponent } from './diret-ngswitch.component';

describe('DiretNgswitchComponent', () => {
  let component: DiretNgswitchComponent;
  let fixture: ComponentFixture<DiretNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
