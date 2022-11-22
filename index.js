function print () {
  let sum = 0;

  for(let i = 1; i <= 10; i ++) {
    if(i % 2 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log('끝났다');
  console.log('총합', sum);
}

print ();