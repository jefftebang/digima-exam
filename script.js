let fs = function (num) {
  if (num === 1)
  {
    return [0, 1];
  } else {
    let result = fs(num - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};

console.log(fs(9));

let fs2 = function (num2) {
  if (num2 === 1)
  {
    return [3, 2];
  } else {
    let result2 = fs2(num2 - 1);
    result2.push(result2[result2.length - 1] + result2[result2.length - 2]);
    return result2;
  }
};

console.log(fs2(9));

