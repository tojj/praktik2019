

module.exports = class LoginHandler {

  constructor(app, User) {
    this.app = app;
    this.User = User;


  }

  createLoginRoute() {
    this.app.post('/json/login', async (req, res) => {
      res.json({ "msg": resMsg, 'user': req.session.user, 'name': req.session.name, '_id': newUser._id });

      // let data = req.body;
      // let user = await this.User.findOne({ email: data.email });
      // if (!user) {
      //   res.json({ error: 'No such user!' });
      //   return;
      // }
      // // compare the password sent in the request (data.password)
      // // with the encrypted password stored in the db (user.password)
      // let match = await bcrypt.compare(data.password + passwordSalt, user.password);
      // if (!match) {
      //   res.json({ error: 'The password does not match!' });
      //   return;
      // }
      // req.session.user = user;
      // // save changes to session
      // req.session.save();
      // // successfully logged in!
      // res.json({ loggedIn: true });
    });

  }


  createCheckIfLoggedInRoute() {
    this.app.get('/json/login', (req, res) => {
      if (!req.session.user) {
        res.json({ error: 'Not logged in!' });
        return;
      }
      res.json({ email: req.session.user.email });
    });
  }
}