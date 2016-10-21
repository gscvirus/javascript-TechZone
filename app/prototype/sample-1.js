function Foo( who ) {
    this.me = who ;
}

Foo.prototype.whoAmI = function( ) {
    return "I am " + this.me ;
}

var a1 = new Foo( "a1" ) ;
var a2 = new Foo( "a2" ) ;

a2.speak = function( ) {
    console.log( "Hello " + this.whoAmI( ) ) ;
}

a1.whoAmI = function( ) {
    console.log( "Hello, " + this.__proto__.whoAmI.call( this ) ) ;
}

console.log( a1.constructor === Foo ) ;
console.log( a1.constructor === a2.constructor ) ;
console.log( a1.__proto__ === Foo.prototype ) ;
console.log( a1.__proto__ === a2.__proto__ ) ;

console.log( a1 ) ;
console.log( a2 ) ;
a2.speak( ) ;
a1.whoAmI( ) ;

function Bar( who ) {
    Foo.call( this , who ) ;
}

var prototype = Bar.prototype ;
Bar.prototype = Object.create( Foo.prototype ) ;
Bar.prototype.speak = function( ) {
    console.log( "Hello " + this.whoAmI( ) ) ;
} ;

var b1 = new Bar( "b1" ) ;

b1.speak( ) ;
