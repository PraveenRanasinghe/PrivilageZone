import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineServiceComponent } from './engine-service.component';

describe('EngineServiceComponent', () => {
  let component: EngineServiceComponent;
  let fixture: ComponentFixture<EngineServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
