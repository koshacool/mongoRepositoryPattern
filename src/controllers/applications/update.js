const { sendOne } = require('../../middleware/index');

const update = (dbService) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId, ...partToUpdate } = req.body;

    const application = await dbService.applications.update(id, userId, partToUpdate);

    return sendOne(res, { application });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
