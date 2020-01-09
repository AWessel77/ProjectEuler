function largestPrimeFactor(number) {
  const primeNumbers = getPrimeNumbers(number);
  let highestPrimeFactor = 0;

  for (let i = 0; i < primeNumbers.length; i++) {
    if(number % primeNumbers[i] === 0) {
      highestPrimeFactor = primeNumbers[i];
    }
  }

  return highestPrimeFactor;
}

function getPrimeNumbers(number) {
  const primeNumbers = [];
  for(let i = 1; i <= number; i++) {
    let isPrimeNumber = true;

    for (let j = 1; j < i; j++) {
      if (j !== 1 && j !== i && i % j === 0) {
        isPrimeNumber = false;
        break;
      }
    }

    if (isPrimeNumber) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

largestPrimeFactor(13195);
