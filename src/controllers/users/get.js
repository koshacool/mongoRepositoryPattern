const { sendOne } = require('../../middleware/index');

const get = (dbService) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await dbService.users.getById(id);

    return sendOne(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
