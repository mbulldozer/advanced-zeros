module.exports = function getZerosCount(number, base) {
  let tempBase = base;
  let zerosCount = number;
  for (let i = 2; i <= tempBase; i++){
    if (tempBase % i == 0){
      let countOne = 0;
      while (tempBase % i == 0){
        countOne++;
        tempBase = Math.floor(tempBase / i);
      }
      let tempNumber = number;
      let countTwo = 0;
      while (tempNumber / i  > 0){ 
        tempNumber = Math.floor(tempNumber / i);
        countTwo += tempNumber;
      }
      zerosCount = Math.min(zerosCount, Math.floor(countTwo / countOne));
    }
  }
  return zerosCount;
}