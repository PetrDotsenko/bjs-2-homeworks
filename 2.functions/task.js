// ZADANIE 1

function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max === arr[i];
    }
    if (arr[i] < min) {
      min === arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = +((avg).toFixed(2));
  return { min: min, max: max, avg: avg };
}




// ZADANIE 2
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
