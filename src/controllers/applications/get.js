const { sendOne } = require('../../middleware/index');

const get = (dbService) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const application = await dbService.applications.getById(id);

    return sendOne(res, { application });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
