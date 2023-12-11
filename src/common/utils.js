import { Console, Random } from '@woowacourse/mission-utils';

const printMessage = (message) => Console.print(message);

const readLineAsync = async (message) => (await Console.readLineAsync(message)).trim()

const throwError = (message) => {
  throw new Error(`${ERROR.prefix}${message}${ERROR.postfix}`);
};

const isInRange = (input, min, max) => input >= min && input <= max;

const generateNumberInRange = (min, max) => Random.pickNumberInRange(min, max);

const isUniqueDigits = (userInputValue) => new Set(userInputValue.toString().split('')).size === 3;

export { printMessage, readLineAsync, throwError, isInRange, generateNumberInRange, isUniqueDigits }