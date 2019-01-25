module.exports.nodemailer = {
  usessl: true,
  port: 465,
  from: 'hello@gitlist.io',
  prepend_subject: false,
  host: 'smtp.mailgun.org',
  user: process.env.MAILGUN_USER,
  pass: process.env.MAILGUN_PASS
}