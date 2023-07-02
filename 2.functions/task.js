function getArrayParams(...arr) {
  let min, max, sum, avg;
  
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i <arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    } if (arr[i] > max){
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summElementsWorker = 0;
  for (let i = 0; i < arr.length; i++) {
    summElementsWorker += arr[i];
  }
  return summElementsWorker;
}

function differenceMaxMinWorker(...arr) {
  let min, max;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i <arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min){
      min = arr[i];
    }
 }
  if (arr.length === 0){
   return 0;
  }
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; 
  let sumOddElement = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
   }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
   if (!arr.length) {
     return 0;
   }
  
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
 }
   }
   return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
 
  for (let i = 0; i < arrOfArr.length; i++){
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
   return maxWorkerResult;
}
