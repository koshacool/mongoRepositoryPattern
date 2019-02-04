const { sendOne } = require('../../middleware/index');

const list = (dbService) => async (req, res, next) => {
  try {
    const users = await dbService.users.getAll();

    return sendOne(res, { users });
  } catch (error) {
    next(error);
  }
};

module.exports = list;
