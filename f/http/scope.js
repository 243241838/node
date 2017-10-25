var globalVariable = 'this is global variable';
function gloabalFunction() {
    var localVariable = 'this is local variable';
    console.log('Visit global/local');
    console.log(globalVariable)
    console.log(localVariable)
    globalVariable = 'this is changed variable';
    console.log(globalVariable);
    function localFunction () {
        var innerLocalVariable = 'this is inner local variable';
        console.log('Visit global/local/innerLocal variable')
        console.log(globalVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)
    }
    localFunction();
}
gloabalFunction();