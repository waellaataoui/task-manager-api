const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);
sgMail
  .send({
    to: "laataouiwael@gmail.com",
    from: "waellaataoui@rocketmail.com",
    subject: "task manager app",
    text: "sent with sendgrid this is a test email"
  })
  .catch((e) => console.log(e));
