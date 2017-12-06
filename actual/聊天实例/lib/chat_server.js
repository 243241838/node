var socketio = require('socket.io');
var io;
var guestNumner = 1;
var nickName = {};
var currentRoom = {};

//启动socket.io服务器
exports.listen = function (server) {
    io = socketio.listen(server);
    io.set('log level', 1);
    //定义每个用户连接的处理逻辑
    io.sockets.on('connection', function (socket) {
        //在用户连接上来时赋予其一个访客名
        guestNumner = assignGuestName(socket, guestNumner, nickName, namesUsed);
        joinRoom(socket, 'Lobby'); // 用户连接上来时把它放入聊天室lobby里
        handleMessageBroadcasting(socket, nickName); //处理用户的消息，更名，以及聊天室的创建和变更
        handleNameChangeAttempts(socket, nickName, namesUsed);
        handleRoomJoining(socket);
        socket.on('rooms', function() { //用户发出请求时， 向其提供已经被占用的聊天室的列表
            socket.emit('rooms', io.socket.manager.rooms);
        });
        handleClientDisconnection(socket, nickName, namesUsed); //定义用户断开连接后的清除逻辑
    })
}

//分配用户昵称
function assignGuestName(socket, guestNumner, nickName, namesUsed) {
    var name = 'Guest' + guestNumner; //生成新昵称
    nickName[scoket.id] = name; //把用户昵称跟客户端连接iD关联上
    scoket.emit('nameResult', { //让用户知道昵称
        success: true,
        name: name
    })
    //增加用来生成昵称的计数器
    namesUsed.push(name);
    return guestNumner + 1;

}

//与进入聊天室相关的逻辑
function joinRoom (socket, room) {
    socket.join(room); //让用户进入房间
    currentRoom[socket.id] = room; // 记录用户的当前房间
    socket.emit('joinResult', {room: room}); //让用户知道他们进入了新房间
    //让房间里的其他用户知道有新用户进入房间
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + 'has joined' + room + '.'
    });
    var usersInRoom = io.sockets.clients(room);

    if (usersInRoom.length > 1) { //如果不知一个用户在这个房间里，汇总下都是谁

    }
}
