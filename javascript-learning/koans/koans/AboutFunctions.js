describe("About Functions", function () {

  it("should declare functions", function () {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }
    console.log(message);

    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    console.log(message);

    expect(getMessage()).toBe("Outer");
    console.log(message);
    expect(overrideMessage()).toBe("Inner");
    console.log(message);
    expect(message).toBe("Outer"); // Outer이 어디서 오버랩 되는지
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";

    function parentfunction() { // 함수의 스코프 확
      var variable = "local";

      function childfunction() {
        return variable;
      }
      console.log(childfunction());
      return childfunction();
    };

    expect(parentfunction()).toBe(parentfunction());
    // console.log(parentfunction());
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first", "second", "third");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    // console.log(secondArg);

    expect(returnSecondArg("only give first arg")).toBe(returnSecondArg());

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third"); // 띄어쓰가 오류가날 수 있음
    // 매소드 join
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = {
      givePraise: appendRules
    };

    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules; // 대입되는 시점
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});