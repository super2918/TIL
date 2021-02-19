describe("About Mutability", function () {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {
      firstname: "John",
      lastname: "Smith"
    };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John");
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname) {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () {
        console.log(firstname)
        return firstname;
      };
      this.getLastName = function () {
        return lastname;
      };
      this.getFullName = function () {
        return fullName;
      };
    }
    var aPerson = new Person("John", "Smith");
    console.log(aPerson)
    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe("John"); // 함수로 리턴된 값이라서 그런거 같다.
    console.log(aPerson.getFirstName());
    expectt(aPerson.getLastName()).toBe("Smith");
    console.log(aPerson.getLastName());
    expect(aPerson.getFullName()).toBe("John Smith");

    console.log(aPerson)
    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname; // 변수를 다시 사용해서 값이 들어가는 듯
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });

});