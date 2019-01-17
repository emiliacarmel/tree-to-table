const Entry = require('./../schemas/schema.js')

const entryController = {};
// console.log('heres the entry schema: ' + Entry);

entryController.create = (req, res, next) => {
  Entry.create(req.body, (err, doc) => {
    if (err) {
      console.log('Error: ' + err);
    }
  })
  next();
};

entryController.getList = (req, res, next) => {
  Entry.find({}, (err, doc) => {
    res.locals.doc = doc;
    next();
  })
};

entryController.edit = (req, res, next) => {
  // code to edit entries
};

entryController.remove = (req, res, next) => {
  // code to delete entries
};


module.exports = entryController;
