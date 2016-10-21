function foo( ) {
    var bar = "bar" ;

    for( let idx = 0 ; idx < bar.length ; idx++ ) {
        console.log( bar.charAt( idx ) ) ;
    }
    console.log( idx ) ;
}

foo( ) ;