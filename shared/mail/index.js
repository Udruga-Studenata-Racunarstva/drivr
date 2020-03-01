const nodemailer = require('nodemailer');
const logger = require('../logger');
const {
  host, port, secure, auth,
} = require('./config');

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  });

  const info = await transporter.sendMail({
    from: 'admin@usr.st', // sender address
    to: 'luciano.peranni@usr.st', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });
  logger.info('Message sent: %s', info.messageId);
}
