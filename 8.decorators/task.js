function cachingDecoratorNew(func) {
    let cache = {}
    return (...args) => {
      const hash = md5(args);
      if (hash in cache) {
        return 'Из кеша: ' + cache[hash];
      }
      const result = func(...args);
      if (Object.keys(cache).length > 4) {
        cache[hash] = result;
        let extraElem = Object.keys(cache)[0];
        delete cache[extraElem];
        return 'Вычисляем: ' + result;
      }
      cache[hash] = result;
      return 'Вычисляем: ' + result;
    }
}


//Задача № 2
function debounceDecoratorNew(func, delay){
  let timerId = null;

  function resultFunction(...args){
    resultFunction.allCount++;

    if(!timerId){
      func(...args);
      resultFunction.count++;
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
      resultFunction.count++;
    }, delay);
  }
  resultFunction.count = 0;
  resultFunction.allCount = 0;
  return resultFunction;
}
