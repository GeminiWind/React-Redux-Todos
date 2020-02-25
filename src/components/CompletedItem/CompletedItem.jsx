import React from 'react'

const CompletedItem = ({item, onUndone}) => {
  return (
    <li className="list-group-item list-group-item-success" key={item.content}>
      {item.content}
    <button className="btn btn-default">
      <i className="fa fa-ban" onClick={() => onUndone(item)}></i>
    </button>
    </li>
  )
}

export default CompletedItem
