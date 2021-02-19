describe("About Arrays", function () {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function () {
    var emptyArray = []; // 이부분은 다시 봐야 하는듯
    expect(typeof (emptyArray)).toBe('object'); //A mistake? - http://javascript.crockford.com/remedial.html
    // console.log(typeof (emptyArray));
    expect(emptyArray.length).toBe(0);
    // console.log(emptyArray)

    var multiTypeArray = [0, 1, "two", function () {
        return 3;
      }, {
        value1: 4,
        value2: 5
      },
      [6, 7]
    ];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    /* slice 배열의 원소 중 특정구간의 해당하는 것들을 추출
      얕은 복사본을 새로운 배열로 객체를 반환, 원본은 변하지 않는다.

      

       parameters array.slice(start, end)
       start :  출구 구간의 시작점
       end : 출구 구간의 종료점, 생략하면 배열의 끝점까지를 추출 구간으로 지정

    */
    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    console.log(array.slice(3, 0));
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function () {
    var array = ["zero", "one", "two", "three", "four", "five"];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }

    console.log(array);
    passedByReference(array);
    console.log(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");
    console.log(array[5]);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three"); // slice는 본래의 객체배열을 훼손하지 않고 객체를 복사해서 사용하기 때문에 그냥 3번째의 배열은 그냥 array에있는 배열에서 3번째로 
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();

    /* pop 매서드는 마지막 요소를 제거하고 요소를 반환한다.
     */
    expect(poppedValue).toBe(3);
    console.log(poppedValue);
    // console.log(array);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});