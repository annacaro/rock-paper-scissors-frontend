import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RpcGameComponent} from './rpc-game.component';
import {ApiService} from "../../services/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";
import {RpsChoice, RpsResponse} from "../../entities/RpsResponse";

describe('RpcGameComponent', () => {
  let component: RpcGameComponent;
  let fixture: ComponentFixture<RpcGameComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ RpcGameComponent ],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpcGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows everything correct on creation of the component', () => {
    const buttons = document.getElementsByTagName('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].innerText).toEqual('ROCK');
    expect(buttons[1].innerText).toEqual('PAPER');
    expect(buttons[2].innerText).toEqual('SCISSORS');
  });

  it('shows winner', () => {
    const serviceResponse: RpsResponse = {
      userChoice: RpsChoice.Rock,
      computerChoice: RpsChoice.Paper,
      winner: 'YOU LOST'
    };
    spyOn(service, 'play').and.returnValue(of(serviceResponse));

    const buttons = document.getElementsByTagName('button');
    buttons[0].click();
    fixture.detectChanges();

    const userChoice = document.getElementById('user-choice');
    expect(userChoice.innerText).toEqual('Your Choice: ROCK');

    const computerChoice = document.getElementById('computer-choice');
    expect(computerChoice.innerText).toEqual('Computer Choice: PAPER');

    const winner = document.getElementById('winner');
    expect(winner.innerText).toEqual('YOU LOST');

  });
});
