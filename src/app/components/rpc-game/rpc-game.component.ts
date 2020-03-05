import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {RpsChoice, RpsResponse} from '../../entities/RpsResponse';
import {ApiService} from '../../services/api.service';
import {RpsRequest} from '../../entities/RpsRequest';

@Component({
  selector: 'app-rpc-game',
  templateUrl: './rpc-game.component.html',
  styleUrls: ['./rpc-game.component.css']
})
export class RpcGameComponent {

  winnerResponse$: Observable<RpsResponse>;
  withWell = false;
  constructor(private apiService: ApiService) { }

  getWinner(choice: string) {
    const c = RpsChoice[choice] as RpsChoice;

    const requestData: RpsRequest = {
      userChoice: c,
      withWell: this.withWell
    };

    this.winnerResponse$ = this.apiService.play(requestData);
  }


}
