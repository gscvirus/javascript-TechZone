function createFunctions( n ) {
  var callbacks = [ ] ;

  for( var i = 0 ; i < n ; i++ ) {
    ( function( idx ) {
        callbacks.push( function( ) {
            return idx ;
        } ) ;
    } )( i ) ;
  }
  
  return callbacks;
}

var callbacks = createFunctions( 5 ) ;
callbacks[0](); // must return 0
callbacks[3](); // must return 3