exports.Webinar = async (io) => {
    io.on('connection',socket => {
        console.log(`User connected , id: ${socket.id}`);
    });
}

function pv_chat()
{
    console.log('ok');
}