

function outest (){
    var c = 20;
    function outer (b){
        function inner (){
            console.log(a, b, (++c));
        }

        let a = 10;
        return inner;
    }
    let a = 200;
    return outer;
}

var close = outest()("Hello World");
close();