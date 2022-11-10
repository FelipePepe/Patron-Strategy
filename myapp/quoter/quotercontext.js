function QuoterContext(strategy, gain) {
  this.strategy = strategy;
  this.gain = gain;

  this.setStrategy = function (strategy) {
    this.strategy = strategy;
  };

  this.quote = function (amount) {
    return this.strategy.quote(amount, this.gain);
  };
}

module.exports = QuoterContext;
