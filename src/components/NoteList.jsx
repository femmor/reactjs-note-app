import React, { Component } from "react";

import NoteItem from "./NoteItem";

class NoteList extends Component {
  render() {
    const { clearNotes, handleDelete, editNote, items } = this.props;

    return (
      <div>
        <ul className="list-group my-3">
          {items.map(item => {
            return (
              <NoteItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                editNote={() => editNote(item.id)}
              />
            );
          })}
        </ul>
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase"
          onClick={clearNotes}
        >
          clear notes
        </button>
      </div>
    );
  }
}

export default NoteList;
