const Entry = require('./../schemas/schema.js')


const entryController = {};

entryController.create = (req, res, next) => {
  // js code that creates a new entry
  // will be communicating w database using a callback that requires err, docs
  // look up in mongoose docs
  console.log('Made it to middleware');
  next();
};

entryController.edit = (req, res, next) => {

};

entryController.remove = (req, res, next) => {

};

entryController.getList = (req, res, next) => {

};


module.exports = entryController;
