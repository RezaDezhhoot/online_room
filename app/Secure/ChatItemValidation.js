const Yup = require('yup');
const schema = Yup.object().shape({
    chat: Yup.string('فیلد عنوان باید متن باشد')
        .required('فیلد عنوان الزامی می باشد')
});

module.exports = schema;