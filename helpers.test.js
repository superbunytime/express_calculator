const {
  findMean,
  findMedian,
  findMode,
} = require("./helpers");

describe("#findMedian", function(){
  it("finds the median of a set", function(){ 
    expect(findMedian([-3, 1, 2, 3, 4, 8])).toEqual(2.5)
  })
  it("finds the median of an odd set", function () { 
    expect(findMedian([-3, 1, 2, 3, 4, 8, 13])).toEqual(3)
  })
})

describe("#findMean", function () {
  it("finds the mean of an empty array", function () { 
    expect(findMean([])).toEqual(0)
  })
  it("finds the mean of an array of numbers", function () { 
    expect(findMean([-3, 1, 2, 3, 4, 8, 13])).toEqual(4)
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMode([4, 4, 4, 4, 1])).toEqual(4)
  })
})