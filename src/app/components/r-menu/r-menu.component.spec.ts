import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMenuComponent } from './r-menu.component';

describe('RMenuComponent', () => {
  let component: RMenuComponent;
  let fixture: ComponentFixture<RMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
