var AppDispatcher = require('../dispatcher/AppDispatcher');

var nextTodoId = 0;
var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      item: {
      	text: text + nextTodoId,
      	id: nextTodoId++
      }
    });
  },

  delItem: function (id) {
  	AppDispatcher.dispatch({
      actionType: 'DEL_ITEM',
      id: id
    });
  }

};

module.exports = ButtonActions;
