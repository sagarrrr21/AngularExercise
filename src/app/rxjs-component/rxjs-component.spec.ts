import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsComponent } from './rxjs-component';

describe('RxjsComponent', () => {
  let component: RxjsComponent;
  let fixture: ComponentFixture<RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
