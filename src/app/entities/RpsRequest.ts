import {RpsChoice} from './RpsResponse';

export interface RpsRequest {
  userChoice: RpsChoice;
  withWell: boolean;
}
