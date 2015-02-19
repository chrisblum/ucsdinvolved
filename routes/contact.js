
 exports.contactUs = function(req, res) {    

 	// res.render('home');
app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: "crexmob@gmail.com",
          pass: "wearemafia1001" 
      }
  });
  //Mail options
  mailOpts = {
      from: req.body.namer + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'crexmob@gmail.com',
      subject: 'Website contact form',
      text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.render('home', { title: 'Club Triton Test', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('home', { title: 'Club Triton Test', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});
  }