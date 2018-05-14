var React = require('react');

var MyButton = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={listItem.id}>{listItem.text}<button onClick={props.delItem} data-key={listItem.id}>x</button></li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.addNewItem}>Add Item</button>
  </div>;
};

module.exports = MyButton;
