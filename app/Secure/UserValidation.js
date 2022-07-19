const Yup = require('yup');
const schema = Yup.object().shape({
    full_name: Yup.string().required('message').min(4,'message').max(255),
    email: Yup.string().required().email('message'),
    password: Yup.string().min(4).max(240).required(),
    floatingConfirmation: Yup.string().required().oneOf([Yup.ref('password'),null],"message")
});

module.exports = schema;