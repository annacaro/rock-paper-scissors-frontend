import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RpsChoice, RpsResponse} from '../../entities/RpsResponse';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-rpc-game',
  templateUrl: './rpc-game.component.html',
  styleUrls: ['./rpc-game.component.css']
})
export class RpcGameComponent implements OnInit {

  winnerResponse$: Observable<RpsResponse>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getWinner(choice: string) {
    const c = RpsChoice[choice] as RpsChoice;
    this.winnerResponse$ = this.apiService.getWinner(c);
  }


}
