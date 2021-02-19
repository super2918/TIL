describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true
    expect(true).toBeTruthy(); // true의 값을 기대한다.

  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy(); // ===는 type까지 체크하는 엄격하게 비교를 한다. 문자열인지 숫자인지 타입까지 맞추고 expextedvalue값이 숫자값의 2입으로 true값이 된다.
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue); // toEqual = 동등성을 비교한다.
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = "2";
    var actualValue = (1 + 1).toString(); // toString은 객체를 설명해주는 문자열을 리턴한다. 그러므로 expect와 actual value값이 객체의 차입이 동일한지 확인한다.

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue); // toBe 해당객체가 동일한 객체인지 확인하는것
    console.log(actualValue, expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});
