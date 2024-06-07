import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterPage } from './after.page';

describe('AfterPage', () => {
  let component: AfterPage;
  let fixture: ComponentFixture<AfterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
