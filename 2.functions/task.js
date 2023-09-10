// ZADANIE 1

function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = +((avg).toFixed(2));
  return { min: min, max: max, avg: avg };
}




// ZADANIE 2
function summElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let max = -Infinity;
  let min = Infinity;
  let difference;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }  
  }
  let division = sumEvenElement / countEvenElement;
  return division;
}


// ZADANIE 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
