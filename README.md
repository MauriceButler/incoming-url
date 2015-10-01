# incoming-url

Gets the incoming url for a request

## usage

``` javascript

var incomingUrl = require('incoming-url');

var incomming = incomingUrl(request);

console.log(incomming);  // https://www.foo.com/bar?things=stuff

```

## example

``` javascript

var http = require('http'),
    server = http.createServer(),
    port = 8080,
    incomingUrl = require('incoming-url');

server.on('request', function(request, response){
    var incomming = incomingUrl(request);

    console.log(incomming);

    response.end();
});

server.listen(port, function(error){
    if(error){
        console.log(error);
        return process.exit(-1);
    }

    console.log('Listening on port: ' + port);
});

```
