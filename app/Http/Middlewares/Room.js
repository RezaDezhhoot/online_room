const Room = require('../../Models/Room');
exports.validKey = async (req,res,next) => {
    if (req.query.room) {
        const room = await Room.findOne({key:req.query.room});
        if (room["status"] === 'open') {
            return next();
        } else  {
            return res.status(403).json({data:{name:'room',message:'اتاق در حال حاضر دردسترس نمی باشد'},status:'error'});
        }
    } else  {
        return res.status(422).json({data:{name:'room',message:'پارامتر اتاق الزامی می باشد'},status:'error'});
    }
}