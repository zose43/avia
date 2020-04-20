// isHappy (happy ticket)
const isHappy = str => {
  let result = 0;
  let resultHalf = 0;
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  for (let i = 0; i < str.length / 2; i++) {
    resultHalf += Number(str[i]);
  }
  if (result / 2 === resultHalf) {
    return true;
  }
  return false;
};

// isPerfect
const isPerfect = num => {
  let result = 1;
  for (let i = 2; i < 100000; i++) {
    if (num % i === 0 && num !== i) {
      result += i;
    }
  }
  if (result === num) {
    return true;
  }
  return false;
};

// sumSquareDifference
const sumSquareDifference = num => {
  let resultSumSquare = 0;
  let resultSquare = 0;
  for (let i = 0; i <= num; i++) {
    resultSumSquare += i ** 2;
    resultSquare += i;
  }
  return resultSquare ** 2 - resultSumSquare;
};

// fizzBuzz
const fizzBuzz = (begin, end) => {
  if (begin > end) {
    console.log();
  }
  for (begin; begin <= end; begin++) {
    if (begin % 3 === 0 && begin % 5 === 0) {
      console.log(String("FizzBuzz"));
    } else if (begin % 5 === 0) {
      console.log(String("Buzz"));
    } else if (begin % 3 === 0) {
      console.log(String("Fizz"));
    } else {
      console.log(begin);
    }
  }
};

// diff
const diff = (a, b) => {
  for (b; b >= a; b--) {
    if (b > 180 && 360 - a > 180 && b - a > 180) {
      return 360 - b + a;
    }
    if (b <= 180) {
      return b - a;
    }
    if (b - a <= 180) {
      return b - a;
    }
  }
};
