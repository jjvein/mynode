var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  delItem: function (id) {
    AppDispatcher.dispatch({
      actionType: 'DEL_ITEM',
      id: id
    })
  }

};

module.exports = ButtonActions;
