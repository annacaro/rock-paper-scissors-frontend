export interface RpsResponse {
  userChoice: RpsChoice;
  computerChoice: RpsChoice;
  winner: string;
}

export enum RpsChoice {
  Rock = 'ROCK',
  Paper = 'PAPER',
  Scissors = 'SCISSORS',
  Well = 'WELL'
}
