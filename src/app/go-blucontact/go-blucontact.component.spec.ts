import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBLUContactComponent } from './go-blucontact.component';

describe('GoBLUContactComponent', () => {
  let component: GoBLUContactComponent;
  let fixture: ComponentFixture<GoBLUContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoBLUContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoBLUContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
