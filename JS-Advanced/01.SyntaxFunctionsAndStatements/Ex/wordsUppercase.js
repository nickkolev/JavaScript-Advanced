function solve(sentence){

    console.log(sentence.toUpperCase().match(/\w+/g).join(', '));
   
}

solve('Hi, how are you?');
solve('hello');