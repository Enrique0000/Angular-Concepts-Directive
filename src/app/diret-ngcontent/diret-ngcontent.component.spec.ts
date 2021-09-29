import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretNgcontentComponent } from './diret-ngcontent.component';

describe('DiretNgcontentComponent', () => {
  let component: DiretNgcontentComponent;
  let fixture: ComponentFixture<DiretNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretNgcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
