import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoAgrupadosComponent } from './nao-agrupados.component';

describe('NaoAgrupadosComponent', () => {
  let component: NaoAgrupadosComponent;
  let fixture: ComponentFixture<NaoAgrupadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoAgrupadosComponent]
    });
    fixture = TestBed.createComponent(NaoAgrupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
