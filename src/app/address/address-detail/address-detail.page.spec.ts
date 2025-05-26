import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressDetailPage } from './address-detail.page';

describe('AddressDetailPage', () => {
  let component: AddressDetailPage;
  let fixture: ComponentFixture<AddressDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
