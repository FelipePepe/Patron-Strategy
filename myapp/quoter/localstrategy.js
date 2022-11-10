function LocalStrategy() {

  this.quote = function (amount, gain) {
    return amount * gain;
  }
}

module.exports = LocalStrategy;