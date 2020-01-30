import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editNote: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editNote: false
    });

    console.log(this.state);
  };

  editNote = id => {
    console.log(`edit note, ${id}`);
  };

  handleDelete = id => {
    console.log(`delete note, ${id}`);
  };

  clearNotes = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mt-4">
              <h3 className="text-center text-capitalize">once note app</h3>
              <NoteInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editNote={this.editNote}
              />
            </div>

            <div className="col-md-8 mx-auto mt-3">
              <h3 className="text-center text-capitalize">notes</h3>
              <NoteList
                handleDelete={this.handleDelete}
                editNote={this.editNote}
                id={this.state.id}
                items={this.state.items}
                clearNotes={this.clearNotes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
