function capitalize(s){
  let firstString ='';
  let secondString ='';
  for(let i in s){
      if (i % 2 != 0) {
        firstString += s[i].toLowerCase();
        secondString += s[i].toUpperCase();
        }
        else {
          firstString += s[i].toUpperCase();
          secondString += s[i].toLowerCase();
        }
    }
  return [firstString, secondString];
};