const Yup = require('yup');
const schema = Yup.object().shape({
    title: Yup.string('فیلد عنوان باید متن باشد')
        .required('فیلد عنوان الزامی می باشد')
        .min(4,'حداقل طول عنوان 4 کارکتر می باشد')
        .max(255,'حداکثر طول عنوان 255 کارکتر می باشد'),
    capacity: Yup.number('فیلد ظرقیت باید عدد باشد')
        .integer('ظرفیت باید عدد صحیح باشد')
        .min(2,'حداقل ظرقیت اتاق 2 عدد می باشد')
        .max(9998,'حداکثر ظرقیت اتاق 9999 عدد می باشد')
        .required('فیلد ظزفیت الرمی می باشد'),
    status: Yup.mixed()
        .oneOf(['open','close'],'وضعیت اتاق نامعتبر می باشد'),
});

module.exports = schema;