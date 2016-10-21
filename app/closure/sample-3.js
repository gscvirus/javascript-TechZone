function foo( ) {
    for( var idx = 1 ; idx <= 5 ; idx++ ) {
        setTimeout( function( ) {
            console.log( "idx: " + idx ) ;
        } , idx * 1000 ) ;
    }
}

foo( ) ;