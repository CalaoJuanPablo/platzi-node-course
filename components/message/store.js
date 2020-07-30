const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessagesList(username) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (!!username) {
      filter = {
        user: username,
      };
    }

    Model.findOne(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }

        resolve(populated);
      });
  });
}

async function updateMessage(id, message) {
  const filteredMessage = await Model.findOne({
    _id: id,
  });
  filteredMessage.message = message;
  const newMessage = await filteredMessage.save();
  return newMessage;
}

async function removeMessage(id) {
  const result = await Model.deleteOne({
    _id: id,
  });

  return result;
}

module.exports = {
  add: addMessage,
  list: getMessagesList,
  updateText: updateMessage,
  remove: removeMessage,
};
