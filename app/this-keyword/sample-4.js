//"use strict" ;
// If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined:

function foo( ) {
    console.log( this.bar ) ;
}

var bar = "bar1" ;
var obj1 = { bar: "bar2" , foo: foo } ;
var obj2 = { bar: "bar3" , foo: foo } ;

foo( ) ;
obj1.foo( ) ;  //obj1 is the context object also referred to as the owning or containing object
obj2.foo( ) ;
