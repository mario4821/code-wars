function solution(str) {
    let result = [];
    for (let i = str.length - 1; i>= 0; i--) {
      result.push(str.charAt(i));
    }
    return result.join("");
  }