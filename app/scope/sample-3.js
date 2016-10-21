var foo = "foo" ;

( function( ) {

    console.log( foo ) ;
    var foo = "foo2" ;
    baz = "baz" ;
})( );

console.log( foo ) ;
console.log( baz ) ;
