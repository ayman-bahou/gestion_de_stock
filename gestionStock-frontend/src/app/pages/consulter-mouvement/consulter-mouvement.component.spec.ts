import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMouvementComponent } from './consulter-mouvement.component';

describe('ConsulterMouvementComponent', () => {
  let component: ConsulterMouvementComponent;
  let fixture: ComponentFixture<ConsulterMouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterMouvementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterMouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
