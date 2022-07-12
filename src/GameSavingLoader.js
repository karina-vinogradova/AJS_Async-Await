import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const result = await json(data);
    const obj = JSON.parse(result);
    return new GameSaving(obj);
  }
}
