const assert=require("chai").assert;
const math=require("../test");
const obj=new math;

describe("Math",function(){
    it("should return a number",function(){
        assert.typeOf(obj.factorial(4),"number");
    })

    it("should return correct factorial",function(){
        assert.equal(obj.factorial(3),6);
    })
})