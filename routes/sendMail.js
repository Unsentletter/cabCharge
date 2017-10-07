const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


module.exports = app => {
  app.post('/sendmail', (req, res) => {
    const msg = {
      to: 'tristan@tristansouthwell.com',
      from: 'tristan@email.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
  });
};