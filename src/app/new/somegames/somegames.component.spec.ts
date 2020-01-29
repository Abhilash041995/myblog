import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomegamesComponent } from './somegames.component';

describe('SomegamesComponent', () => {
  let component: SomegamesComponent;
  let fixture: ComponentFixture<SomegamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomegamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
