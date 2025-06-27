import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentoDetallePage } from './momento-detalle.page';

describe('MomentoDetallePage', () => {
  let component: MomentoDetallePage;
  let fixture: ComponentFixture<MomentoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
