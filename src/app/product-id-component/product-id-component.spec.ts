import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIdComponent } from './product-id-component';

describe('ProductIdComponent', () => {
  let component: ProductIdComponent;
  let fixture: ComponentFixture<ProductIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
