exports.Headers = (req,res,next) => {
    res.set({
        'Access-Control-Allow-Origin': ' *',
        'Access-Control-Allow-Methods': ' POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': ' Content-Type, Accept, Authorization, X-Requested-With, Cache-Control'
    });
    next();
}