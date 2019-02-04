const { sendOne } = require('../../middleware/index');

const create = (dbService) => async (req, res, next) => {
  try {
    const { name, userId } = req.body;
    const application = await dbService.applications.create(name, userId);

    return sendOne(res, { application });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
