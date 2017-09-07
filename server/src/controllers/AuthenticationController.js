const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'Oops, something went wrong',
      });
    }
    // res.send({
    //   message: `Hello ${req.body.email}, Your user has been registered! Have fun`,
    // });
  },
};
