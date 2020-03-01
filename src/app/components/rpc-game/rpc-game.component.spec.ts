import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpcGameComponent } from './rpc-game.component';

describe('RpcGameComponent', () => {
  let component: RpcGameComponent;
  let fixture: ComponentFixture<RpcGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpcGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpcGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
