var PrimeFactors = function() {};

PrimeFactors.for = function(num) {
  var primes = [];
  for (i = 2; i <= num; i++) {
    while (num % i == 0) {
      primes.push(i);
      num = num / i;
    }
  }
  return primes;
};

module.exports = PrimeFactors;