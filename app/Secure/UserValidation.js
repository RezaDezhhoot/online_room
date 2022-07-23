const Yup = require('yup');
const schema = Yup.object().shape({
    full_name: Yup.string('فیلد نام باید متن باشد')
        .required('فیلد نام الزامی می باشد')
        .min(2,'حداقل طول برای نام 2 کارکتر می باشد')
        .max(255,'حداقل طول برای نام 255 کارکتر می باشد'),
    email: Yup.string('فیلد ایمیل باید متن باشد')
        .required('فیلد ایمیل الزامی می باشد')
        .email('message','ایمیل وارد شده باید یک ایمیل معتبر باشد'),
    password: Yup.string('فیلد رمز باید متن باشد')
        .min(4,'حداقل رمز برای نام 4 کارکتر می باشد')
        .max(240,'حداقل طول برای رمز 240 کارکتر می باشد')
        .required('فیلد رمز عبور الزامی می باشد'),
    passwordConfirmation: Yup.string('فیلد تایید رمز باید متن باشد')
        .required('فیلد تایید رمز الزامی می باشد').oneOf([Yup.ref('password'),null],"فیلذ تایید رمز مطابقت ندارد")
});

module.exports = schema;