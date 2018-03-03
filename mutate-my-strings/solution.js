function mutateMyStrings(stringOne, stringTwo){
  let strings = [stringOne];
  let firstSet = stringOne.split('');
  let secondSet = stringTwo.split('');
  for(let i in stringOne) {
    if(firstSet[i] !== secondSet[i]){
      firstSet[i] = secondSet[i]
      strings.push(firstSet.join(''));
    }
  }
  return strings.join('\n') + '\n';
}