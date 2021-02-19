describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
      megalomaniac = {
        mastermind: "Joker",
        henchwoman: "Harley"
      };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined); // key의 
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind: "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        console.log(noOfBrains);
        return "They are " + this.henchman + " and the" + Array(noOfBrains + 1).join(" " + this.mastermind);
        // param 4의 값이 들어와서 배열의 반복 onOfBrains++; 4반 반복하고 " " 빈공간을 두고 mastermind key값을
        // 입력하여 도출하는것
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    console.log(battleCry);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    console.log(currentYear);
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2020);
    expect(megalomaniac.calculateAge()).toBe(50);
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false); // 일치하는 값이 없기 때문에 값이 undifined이기 때문에 false 값이 된다.
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = {
      mastermind: "Agent Smith",
      henchman: "Agent Smith"
    };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith"; // key값을 넣었기 때문에?
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman; // 삭제 key vlaue값이 사라짐 값이 없으므로 false값이 성립한다. 
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function () {
    function Circle(radius) {
      this.radius = radius;
    }

    var simpleCircle = new Circle(10);
    var colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe(undefined); // 저장된 값이 없기 때문에?
    expect(colouredCircle.colour).toBe("red");

    Circle.prototype.describe = function () {
      return "This circle has a radius of: " + this.radius;
    };
    /*
      describe jesmine 함수 결합
    */
    expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
    expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});