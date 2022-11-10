function LocalWithTaxStrategy(tax) {
  this.tax = tax;

  this.quote = function (amount, gain) {
    return amount * gain + tax * amount;
  };
}

module.exports = LocalWithTaxStrategy;
