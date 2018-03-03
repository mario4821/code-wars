function high(x){
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let words = x.split(' ');
  let highestWord = ''
  let highScore = 0;
  for (let i in words) {
    let score = words[i]
      .split('')
      .map(letters => letters.charCodeAt(0) - 96)
      .reduce(reducer, 0)
    if (score > highScore) {
      highScore = score;
      highestWord = words[i];
    }
  } 
  return highestWord;
}