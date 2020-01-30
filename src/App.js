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

    const newNote = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedNotes = [...this.state.items, newNote];

    this.setState({
      items: updatedNotes,
      id: uuid(),
      item: "",
      editNote: false
    });
  };

  handleEdit = id => {
    const filteredNotes = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredNotes,
      item: selectedItem.title,
      id: id,
      editNote: true
    });
  };

  handleDelete = id => {
    const filteredNotes = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredNotes
    });
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
                handleEdit={this.handleEdit}
              />
            </div>

            <div className="col-md-8 mx-auto mt-3">
              <h3 className="text-center text-capitalize">notes</h3>
              <NoteList
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
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
