import React from 'react';

const TodoItem = ({item, onDone, onRemove}) => {
  return (
    <li className="list-group-item list-group-item-info">
      <span>{item.content}</span>
      <button className="btn btn-default"><span className="glyphicon glyphicon-remove" onClick={() => onDone(item)}/>
      </button>
      <button className="btn btn-default"><span className="glyphicon glyphicon-ok" onClick={() => onRemove(item)}/>
      </button>
    </li>
  );
};

export default TodoItem;
