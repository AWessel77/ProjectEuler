function largestPalindromeProduct(n) {
  let highestPalindromic = 0;

  for(let i = Math.pow(10, n-1); i < Math.pow(10, n); i++)  {  
    for(let j = Math.pow(10, n-1); j < Math.pow(10, n); j++) {
      const product = i*j;
      
      if(isNumberPalindromic(product) && product > highestPalindromic) {
        highestPalindromic = product;
      }
    }
  }

  return highestPalindromic;
}

function isNumberPalindromic(n) {
  const nrString = (n + '');
  return nrString === nrString.split('').reverse().join('');
}

largestPalindromeProduct(3);
