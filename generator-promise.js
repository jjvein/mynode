var fs = require('fs')

function run(gen) {
    var args = [].slice.call( arguments, 1), it;

    it = gen.apply( this, args );

    return Promise.resolve()
        .then( function handleNext(value){
            var next = it.next( value );

            return (function handleResult(next){
                if (next.done) {
                    return next.value;
                }
                else {
                    return Promise.resolve( next.value )
                        .then(
                            handleNext,
                            function handleErr(err) {
                                return Promise.resolve(
                                    it.throw( err )
                                )
                                .then( handleResult );
                            }
                        );
                }
            })( next );
        });
}

function *getData() {
  var file =  'promise.js'
  
  var p = new Promise(function(resolve, reject){
      fs.lstat(file, function(e, stat){
        if(e) reject(e)

        resolve(stat)
      }) 
  })

  var stat = yield p
  return stat
}


run(getData).then(function(data){
  console.log('data--->', data)
}, function(err){
  console.log(err)

})

