exports.Webinar = async (io,req,res,next) => {
    res.send('111');
    io.on('connection',socket => {
        console.log(`User connected , id: ${socket.id}`);
    });
}

function pv_chat()
{
    console.log('socket ok');
}