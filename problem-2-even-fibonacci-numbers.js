function fiboEvenSum(n) {
  let sum = 0;
  let prevFibo = 1;
  let fibo = 1;
  for(let i = 1; i <= n; i++) {    
    if (fibo % 2 === 0) {
      sum += fibo;
    }

    const newFibo = prevFibo + fibo 
    prevFibo = fibo;
    fibo = newFibo;
  }

  return sum;
}

fiboEvenSum(18);
