function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (const key in salaries) {
    const num = salaries[key];
    
    if (Number.isFinite(num)) {
      sum += num;
    }


  }
  return sum;
  
}
