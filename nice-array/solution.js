
function isNice(arr){
    let counter = 0;
    if (arr.length === 0) {
      return false;
    }
    for (let i of arr) {
      if (arr.includes(i - 1) || arr.includes(i + 1)) {
        counter++;
      } else {
        return false;
      }
    }
    if (counter === arr.length) {
      return true;
    }
  }