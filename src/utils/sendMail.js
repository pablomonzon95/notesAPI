const { MAILJET_PUBLIC_KEY, MAILJET_SECRET_KEY, SENDER_EMAIL, SENDER_NAME } =
  process.env;

const mailjet = require("node-mailjet").apiConnect(
  MAILJET_PUBLIC_KEY,
  MAILJET_SECRET_KEY
);

const sendMail = async (subject, content, recipient) => {
  await mailjet.post("send").request({
    FromEmail: SENDER_EMAIL,
    FromName: SENDER_NAME,
    Subject: subject,
    "Html-part": content,
    Recipients: [{ Email: recipient }],
  });
};

module.exports = sendMail;