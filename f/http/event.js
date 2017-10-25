function clickIt (e) {
    window.alert('button id click')
}
var button = document.getElementById('button');
button.addEventListener('click', clickIt)
//addEventListener() 方法用于向指定元素添加事件句柄。
//EventEmitter