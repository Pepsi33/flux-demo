var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
  getInitialState: function () {
    return {
      items: ListStore.getAll()
    };
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    console.info(ListStore.getAll());
    this.setState({
      items: ListStore.getAll()
    });
  },

  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  delItem: function (event) {
    var id = event.currentTarget.getAttribute("data-key");
    ButtonActions.delItem(id);
  },

  render: function() {
    return <MyButton
      items={this.state.items}
      addNewItem={this.createNewItem}
      delItem={this.delItem}
    />;
  }

});

module.exports = MyButtonController;
