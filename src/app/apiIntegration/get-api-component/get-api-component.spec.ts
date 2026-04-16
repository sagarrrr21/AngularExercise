import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiComponent } from './get-api-component';

describe('GetApiComponent', () => {
  let component: GetApiComponent;
  let fixture: ComponentFixture<GetApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
