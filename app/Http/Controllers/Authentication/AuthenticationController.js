const Yup = require('yup');
const Controller = require('../Controller');
const User = require('../../../Models/User');
const passport = require('passport');
const jwt = require("jsonwebtoken");

class AuthenticationController
{
    static index(req , res)
    {
        res.send('index');
    }

    static login(req , res)
    {
        const data = {
            title: 'صفحه ورود'
        };
        return res.status(200).json({data:data,message:'success'});
    }

    static async login_logic (req, res, next)
    {
        const errorArr = [];
        passport.authenticate(
        'login',
        async (err, user, info) => {
        try {
            await User.userLoginValidation(req.body);
            if (err || !user) {
                errorArr.push({
                    name:'email',
                    message: 'ادرس ایمیل یا رمز عبور اشتباه می باشد'
                });
                return res.status(422).json({data:errorArr,message:'error'});
            }

            req.login(
                user,
                { session: false },
                async (error) => {
                    if (error) return next(error);
                    const token = Controller.makeToken(user);

                    return res.status(200).json({data:{full_name: user["full_name"] ,email: user["email"],token: token},message:'success'});
                }
            );
        } catch (error) {
            error.inner.forEach(e => {
                errorArr.push({
                    name: e.path,
                    message: e.message
                });
            });
            return res.status(500).json({data:errorArr, message:'error'});
        }
    }
    )(req, res, next);
}

    static async register(req , res)
    {
        const data = {
            title: 'صفحه ثبت نام'
        };
        return res.status(200).json({data:data,message:'success'});
    }

    static async register_logic(req , res)
    {
        const errorArr = [];
        try {
            const {full_name , email , password} = req.body;
            await User.userValidation(req.body);
            if (await User.findOne({email})) {
                errorArr.push({
                    name:'email',
                    message: 'کاربر با این ایمیل موجود است'
                });
                return res.status(422).json({data:errorArr,message:'error'});
            }
            const user = await User.create({full_name, email, password,});
            const token = Controller.makeToken(user);

            return res.status(201).json({data:{full_name: user["full_name"] ,email: user["email"],token: token},message:'success'});
        } catch (exception) {
            exception.inner.forEach(e => {
                errorArr.push({
                    name: e.path,
                    message: e.message
                });
            });
            return res.status(422).json({data:errorArr, message:'error'});
        }
    }

    static guest(req , res)
    {

    }

    static guest_logic(req , res)
    {

    }

    static forget_password(req,res)
    {

    }

    static forget_password_logic(req,res)
    {

    }

    static reset_password(req,res)
    {

    }

    static reset_password_logic(req,res)
    {

    }
}

module.exports = AuthenticationController;