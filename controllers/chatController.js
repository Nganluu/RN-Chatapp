const db = require('../models');


const handle = (socket_io, socket)=>{
    console.log("test connection socket");

    socket.on("is_typing", function(userId){
        db.user.findOne({

        }).then(function(user){
            console.log(id);
        })
    })
}
const getMessage = (socket) => {
    console.log("co nguoi ket noi" + socket.id)
    socket.on("send-message", function(data){
        console.log("nhan duoc " + data)
    })
}
const chat = {};
chat.getMessage = getMessage
module.exports = chat;