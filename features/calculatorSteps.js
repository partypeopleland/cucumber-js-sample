var Calculator = require('../app/calculator');
var should = require('chai').should();

var calculator = new Calculator();

module.exports = function() {
    this.Given(/^顧客消費總金額為 "([^"]*)" 元$/, function(totalPrice) {
        this.totalPrice = parseInt(totalPrice);
    });

    this.When(/^計算折扣後金額$/, function() {
        this.result = calculator.getDiscountPrice(this.totalPrice);
    });

    this.Then(/^折扣後金額應該為 "([^"]*)" 元$/, function(result) {
        this.result.should.equal(parseInt(result));
    });
}
