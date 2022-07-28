const nodeMailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');

const transporterDetail = smtp({
    host: "188.40.16.11",
    port: 465,
    secure: true,
    auth: {
        user: "test@rezadezhhoot.ir",
        pass: "colnreal"
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = (email,full_name,subject,message) => {
    const transporter = nodeMailer.createTransport(transporterDetail);
    const options = {
        from: "test@rezadezhhoot.ir",
        to: email,
        subject,
        html: `<h1>hello ${full_name}</h1><p>${message}</p>`
        // text: `hello`
    }

    transporter.sendMail(options,(err,info) => {
        if (err) console.log(err);
        else console.log(info);
    });
}

