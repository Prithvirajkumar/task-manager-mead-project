const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "prithvirajkumar14@gmail.com",
    subject: "Thanks for creating an account",
    text: `Welcome to the app, ${name}. Let me know your thoughts on the app`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "prithvirajkumar14@gmail.com",
    subject: "Hope you liked the app",
    text: `Thank you for testing the app, ${name}. Please share your thoughts on the app`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
