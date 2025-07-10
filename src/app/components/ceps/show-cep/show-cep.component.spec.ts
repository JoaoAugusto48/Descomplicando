import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCepComponent } from './show-cep.component';

describe('ShowCepComponent', () => {
  let component: ShowCepComponent;
  let fixture: ComponentFixture<ShowCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
