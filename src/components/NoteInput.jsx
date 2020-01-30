import React, { Component } from "react";

class NoteInput extends Component {
  render() {
    const { item, handleSubmit, handleChange, editNote } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-info">
                  <i className="fas fa-book text-white"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="add a note..."
                value={item}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-info btn-block text-uppercase"
          >
            submit note
          </button>
        </form>
        <div className="form-group"></div>
      </div>
    );
  }
}

export default NoteInput;
