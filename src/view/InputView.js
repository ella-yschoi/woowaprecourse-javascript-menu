import { readLineAsync } from '../common/utils.js';

class InputView {

  static getCoachName() {
    return readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n')
  }

  static getCannotEatMenu(name) {
    return readLineAsync(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`)
  }
}

export default InputView;
