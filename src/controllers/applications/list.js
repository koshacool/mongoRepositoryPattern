const { sendOne } = require('../../middleware/index');

const list = (dbService) => async (req, res, next) => {
  try {
    const { userId } = req.query;

    const applications = await dbService.applications.getAll(userId);

    return sendOne(res, { applications });
  } catch (error) {
    next(error);
  }
};

module.exports = list;
