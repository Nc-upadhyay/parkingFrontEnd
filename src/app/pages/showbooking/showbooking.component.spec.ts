import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbookingComponent } from './showbooking.component';

describe('ShowbookingComponent', () => {
  let component: ShowbookingComponent;
  let fixture: ComponentFixture<ShowbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowbookingComponent]
    });
    fixture = TestBed.createComponent(ShowbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
