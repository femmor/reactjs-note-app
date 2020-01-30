import React, { Component } from "react";

class NoteItem extends Component {
  render() {
    const { title, editNote, handleDelete } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between">
        <h6 className="text-capitalize">{title}</h6>
        <div className="note-icons">
          <span className="mx-2" onClick={editNote}>
            <i className="fas fa-edit text-warning"></i>
          </span>
          <span className="mx-2" onClick={handleDelete}>
            <i className="fas fa-trash text-danger"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default NoteItem;
