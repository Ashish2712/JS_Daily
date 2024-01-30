function foo(){
    foo()
}

foo()
//VM1528:2 Uncaught RangeError: Maximum call stack size exceeded
