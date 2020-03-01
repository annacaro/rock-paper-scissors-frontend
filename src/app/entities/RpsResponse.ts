export interface RpsResponseData {
  userChoice: RpsChoice;
  computerChoice: RpsChoice;
  winner: string;
}

export class RpsResponse {
  userChoice: RpsChoice;
  computerChoice: RpsChoice;
  winner: string;

  constructor() {}

  public static createRpsResponse(data: RpsResponseData): RpsResponse {
    const response = new RpsResponse();
    response.userChoice = data.userChoice;
    response.computerChoice = data.computerChoice;
    response.winner = data.winner;
    return response;
  }
}

export enum RpsChoice {
  Rock = 'ROCK',
  Paper = 'PAPER',
  Scissors = 'SCISSORS'
}
