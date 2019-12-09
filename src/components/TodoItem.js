import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <div className="fas fa-pen"></div>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <div className="fas fa-trash"></div>
          </span>
        </div>
      </li>
    );
  }
}
