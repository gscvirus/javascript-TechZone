//"use strict" ;
console.log( typeof un ) ;
console.log( typeof deux ) ;
console.log( typeof trois ) ;
var jsString = "var un = 1; console.log( un );" ;
eval( jsString ) ;

jsString = "var deux = 2; console.log( deux );" ;
new Function( jsString )( ) ;

jsString = "var trois = 3 ; console.log( trois ) ;" ;
( function( ) {
    eval( jsString ) ;
} )( ) ;

console.log( typeof un ) ;
console.log( typeof deux ) ;
console.log( typeof( trois ) ) ;