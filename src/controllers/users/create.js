const { sendOne } = require('../../middleware/index');

const create = (dbService) => async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const user = await dbService.users.create(login, password);

    return sendOne(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
