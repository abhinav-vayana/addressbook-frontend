import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressCreateComponent } from './address-create.page';

describe('AddressCreateComponent', () => {
  let component: AddressCreateComponent;
  let fixture: ComponentFixture<AddressCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressCreateComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
