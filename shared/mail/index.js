const nodemailer = require('nodemailer');
const logger = require('../logger');
const {
  host, port, secure, auth,
} = require('./config');

const { render, renderText } = require('./render');

async function sendMail(options, templateName) {
  const {
    to, subject, data,
  } = options;
  const html = await render(templateName, data);
  const text = renderText(templateName, data);

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
    from: auth.user,
    to,
    subject,
    text,
    html,
  });
  logger.info('Message sent: %s', info.messageId);
}

module.exports = { sendMail };
