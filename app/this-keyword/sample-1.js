function foo( num ) {
    console.log( "foo: " + num ) ;
    this.count++ ;
}

foo.count = 0 ;
var idx ;

for( idx = 0 ; idx < 10 ; idx++ ) {
    if( idx > 5 ) {
        foo( idx ) ;
    }
}

console.log( foo.count ) ;