import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LMenuComponent } from './l-menu.component';

describe('LMenuComponent', () => {
  let component: LMenuComponent;
  let fixture: ComponentFixture<LMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
